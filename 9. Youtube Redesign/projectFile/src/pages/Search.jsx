import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import SearchCard from '../components/SearchCard';
import searchAction from '../redux/actions/SearchData';

import './Search.css'

function Search() {
  const dispatch = useDispatch();
  const { keyword } = useParams();
  const { getSearch } = useSelector((state) => state.getSearch);

  useEffect(() => {
    dispatch(searchAction(keyword));
  }, [dispatch, keyword]);

  return (
    <div className='search'>
      {getSearch?.items?.map((search, index) => (
        <SearchCard key={index} search={search} />
      ))}
    </div>
  );
}

export default Search;
