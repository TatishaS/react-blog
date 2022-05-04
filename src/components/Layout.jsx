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
  const postsTotal = useSelector(({ posts }) => posts.items.total);
  const isLoaded = useSelector(({ posts }) => posts.isLoaded);
  const [searchValue, setSearchValue] = React.useState('');
  const [searchLoading, setSearchLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [resultsLoaded, setResultsLoaded] = React.useState(false);
  const [results, setResults] = React.useState(null);
  const [page, setPage] = React.useState(1);
  const [pageCount, setPageCount] = React.useState(0);

  const ITEMS_PER_PAGE = 5;

  React.useEffect(() => {
    if (page) {
      dispatch(fetchPosts(page));
    }
  }, [dispatch, page]);

  React.useEffect(() => {
    if (posts) {
      setPageCount(Math.ceil(postsTotal / ITEMS_PER_PAGE));
    }
  }, [posts]);

  // Get search results
  const getResults = async query => {
    // Set initial state when triggering search
    setError(false);
    setSearchLoading(true);
    setResultsLoaded(false);

    // Attempt to send request to server
    try {
      const { data } = await axios.get(
        `http://localhost:5656/posts?query=${query}`
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

  // Handling results prev/next page
  const handlePrevPage = () => {
    setPage(page => {
      if (page === 1) return page;
      return page - 1;
    });
  };

  const handleNextPage = () => {
    setPage(page => {
      if (page === pageCount) return page;
      return page + 1;
    });
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
              <PostsList
                posts={results ? results.items : posts}
                page={page}
                pageCount={pageCount}
                onPrevPage={handlePrevPage}
                onNextPage={handleNextPage}
              />
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
