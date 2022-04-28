import React from 'react';
import axios from 'axios';
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../redux/actions/posts';
import { debounce } from '../config/debounce';

import { Header } from './Header';
import { Menu } from './Menu';
import { PostsList } from './PostsList';
import { Spinner } from './Spinner';
import { ErrorBlock } from './ErrorBlock';

export const Layout = () => {
  const dispatch = useDispatch();
  const posts = useSelector(({ posts }) => posts.items.items);
  const isLoaded = useSelector(({ posts }) => posts.isLoaded);
  const [searchValue, setSearchValue] = React.useState('');
  const [searchLoading, setSearchLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [resultsLoaded, setResultsLoaded] = React.useState(false);
  const [results, setResults] = React.useState(null);

  React.useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const getResults = async query => {
    setError(false);
    setSearchLoading(true);
    setResultsLoaded(false);

    try {
      const { data } = await axios.get(
        `http://localhost:5656/posts?query=${query}&limit=10`
      );
      setResults(data);
      setResultsLoaded(true);
    } catch (error) {
      setError(true);
      setSearchLoading(false);
      setResultsLoaded(false);

      console.log(error);
    }

    setSearchLoading(false);
  };

  /* const handleSearch = event => {
    if (event.key === 'Enter') {
      //console.log('enter press here! ');
      if (!searchValue) return;
      getResults(searchValue);

      setSearchValue('');
    }
  }; */
  const handleChangeInput = event => {
    setSearchValue(event.target.value);
    console.log(searchValue);
    //getResults(searchValue);
  };
  //const optimizedSearch = debounce(handleChangeInput, 1000);

  const handleSearch = event => {
    debounce(handleChangeInput, 1000);
    getResults(searchValue);
  };

  return (
    <>
      <div className="wrapper">
        <Menu />
        <div className="container">
          <div className="container__inner">
            <Header
              searchValue={searchValue}
              handleChangeInput={handleChangeInput}
            />

            {error && <ErrorBlock />}
            {searchLoading && <Spinner />}
            {isLoaded ? (
              <PostsList posts={results ? results.items : posts} />
            ) : (
              <Spinner />
            )}
          </div>
          <main className="page page--main">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};
