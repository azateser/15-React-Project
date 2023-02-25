import { useState } from 'react';
import { Time, Eye } from '../assets/icon';
import moment from 'moment/moment';

import { motion } from 'framer-motion';

function HomeCard({ video }) {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div onClick={() => (window.location = `video/${video?.id?.videoId}`)} className='relative h-40 w-full rounded-2xl'>
      <div className='absolute top-4 flex w-full items-center justify-between px-3 '>
        <div className='flex cursor-pointer items-center gap-2 rounded-full bg-white px-[6px] py-1 text-xs shadow-md'>
          <div className='h-5 w-5 rounded-full'>
            <img className='h-5 w-5 rounded-full' src={video?.snippet?.thumbnails?.high?.url} alt='' />
          </div>
          <div>{video?.snippet?.channelTitle}</div>
        </div>
        <div className='rounded-full bg-black/20 px-3 py-1 text-xs text-white shadow-md backdrop-blur-md'>10:20</div>
      </div>
      <div className='h-full w-full cursor-pointer select-none rounded-2xl object-cover'>
        <img className='h-full w-full rounded-2xl object-cover' src={video?.snippet?.thumbnails?.high?.url} alt='' />
      </div>
      <div onMouseEnter={() => setShowDescription(true)} onMouseLeave={() => setShowDescription(false)} className='absolute bottom-0 h-10 w-full cursor-pointer rounded-b-2xl bg-black/10 px-4 pt-2 pb-12 backdrop-blur-sm transition-all hover:h-24'>
        <div className='mb-1 font-medium text-white'>{(video?.snippet?.title).substring(0, 25) + '...'}</div>
        <div className='flex items-center gap-4 fill-white text-xs font-light text-white'>
          <div className='flex items-center gap-1'>
            <Eye className='w-3' /> {Math.round(Math.random() * 1000)}K
          </div>
          <div className='flex items-center gap-1 text-xs'>
            <Time className='w-3' /> {moment(video?.snippet?.publishTime).startOf('day').fromNow()}
          </div>
        </div>
        {showDescription && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }} className='text-xs font-light text-white'>
            {(video?.snippet?.description).substring(0, 70) + '...'}
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default HomeCard;
