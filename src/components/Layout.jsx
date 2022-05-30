import React from 'react';
import axios from 'axios';
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts, removePost } from '../redux/actions/posts';
import { debounce } from '../config/debounce';

import { Header } from './Header';
import { Login } from './Login';
import { Menu } from './Menu';
import { PostsList } from './PostsList';
import { Spinner } from './Spinner';
import { ErrorBlock } from './ErrorBlock';
import { Register } from './Register';

export const Layout = () => {
  const dispatch = useDispatch();
  //States for posts
  const posts = useSelector(({ posts }) => posts.items.items);
  const postsTotal = useSelector(({ posts }) => posts.items.total);
  const isLoaded = useSelector(({ posts }) => posts.isLoaded);

  //States for search
  const [searchVisible, setSearchVisible] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);
  const [showRegisterModal, setShowRegisterModal] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');
  const [searchLoading, setSearchLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [resultsLoaded, setResultsLoaded] = React.useState(false);
  const [results, setResults] = React.useState(null);

  //States for pagination
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

  // Toggle search input visibility
  const handleSearchVisible = status => {
    setSearchVisible(status);
    setSearchValue('');
  };

  // Toggle modal forms
  const handleShowModal = status => {
    setShowModal(status);
  };
  const handleShowRegister = status => {
    setShowRegisterModal(status);
    if (showRegisterModal) setShowModal(false);
  };

  // Get search results
  const getResults = async query => {
    // Set initial state when triggering search
    setError(false);
    setSearchLoading(true);
    setResultsLoaded(false);

    // Attempt to send request to server
    try {
      const { data } = await axios.get(`posts?query=${query}`);
      setResults(data);
      setResultsLoaded(true);
    } catch (error) {
      // Reset search state in case of error
      setSearchLoading(false);
      setResultsLoaded(false);

      // Inform user about error
      setError(true);
      alert(error);
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

  const handleClickRemove = async id => {
    if (window.confirm('Вы хотите удалить пост?')) {
      await dispatch(removePost(id));
      dispatch(fetchPosts(page));
    }
  };

  return (
    <>
      <div className="wrapper">
        <Menu handleShowModal={handleShowModal} />
        <div className="container">
          <div className="container__inner">
            <Header
              searchValue={searchValue}
              searchVisible={searchVisible}
              handleChangeInput={handleChangeInput}
              handleSearchVisible={handleSearchVisible}
              handleShowModal={handleShowModal}
            />

            {error && <ErrorBlock />}
            {searchLoading && <Spinner />}

            {isLoaded ? (
              <PostsList
                posts={results && searchVisible ? results.items : posts}
                page={page}
                pageCount={pageCount}
                onPrevPage={handlePrevPage}
                onNextPage={handleNextPage}
                onRemove={handleClickRemove}
              />
            ) : (
              <Spinner />
            )}
          </div>
          <main className="page page--main">
            <Outlet context={[page, setPage]} />
          </main>
        </div>
      </div>
      {showModal && (
        <Login
          handleShowModal={handleShowModal}
          handleShowRegister={handleShowRegister}
        />
      )}
      {showRegisterModal && (
        <Register
          handleShowRegister={handleShowRegister}
          handleShowModal={handleShowModal}
        />
      )}
    </>
  );
};
