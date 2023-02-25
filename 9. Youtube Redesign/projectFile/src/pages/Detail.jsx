import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import DetailCard from '../components/DetailCard';
import DetailLeft from '../components/DetailLeft';
import detailAction from '../redux/actions/DetailData';

import './Detail.css'

function Detail() {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { getVideo } = useSelector((state) => state.getVideo);

  useEffect(() => {
    dispatch(detailAction(id));
  }, [dispatch, id]);

  return (
    <div className='detail'>
     {
        getVideo && getVideo?.items?.map((video) => (
          <DetailCard
            video={video}
          />
        ))
     }
      <DetailLeft />
    </div>
  );
}

export default Detail;
