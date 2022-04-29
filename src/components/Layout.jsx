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

  // Get search results
  const getResults = async query => {
    // Set initial state when triggering search
    setError(false);
    setSearchLoading(true);
    setResultsLoaded(false);

    // Attempt to send request to server
    try {
      const { data } = await axios.get(
        `http://localhost:5656/posts?query=${query}&limit=10`
      );
      setResults(data);
      setResultsLoaded(true);
    } catch (error) {
      // Reset search state in case of error

      setSearchLoading(false);
      setResultsLoaded(false);

      // Inform user about error
      setError(true);
      console.log(error);
    }

    setSearchLoading(false);
  };

  // Debouncing requests to server
  const getDebouncedResults = React.useCallback(
    debounce(value => getResults(value), 500),
    []
  );

  // Debounced search triggered by input change
  const handleChangeInput = event => {
    setSearchValue(event.target.value);
    getDebouncedResults(searchValue);
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
