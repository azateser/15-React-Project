import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Filter from '../components/Filter';
import HomeCard from '../components/HomeCard';
import homeAction from '../redux/actions/HomeData';

import './Home.css'

function Home() {
  const dispatch = useDispatch();
  const { getVideos } = useSelector((state) => state.getVideos);

  const [keyword, setKeyword] = useState('MacOS');

  useEffect(() => {
    dispatch(homeAction(keyword));
  }, [dispatch, keyword]);

  return (
    <div className='home'>
      <Filter setKeyword={setKeyword} />
      <div className='w-full'>
        <div className='cards'>
          {getVideos?.items?.map((video, index) => (
            <HomeCard key={index} video={video} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
