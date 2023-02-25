import moment from 'moment';
import ReactPlayer from 'react-player';
import { Like, Dislike, Eye, Time } from '../assets/icon';

function DetailCard({ video }) {
  return (
    <div className='w-full lg:w-3/4'>
      <div className='mb-3 text-2xl font-bold'>{video?.snippet?.title}</div>
      <ReactPlayer url={`https://www.youtube.com/watch?v=${video?.id}`} width='100%' className='h-96 w-full' />
      <div className='mt-4 flex items-center justify-between'>
        <div className='flex items-center'>
          <img src={video?.snippet?.thumbnails?.medium?.url} alt='avatar' className='h-10 w-10 rounded-full' />
          <div className='ml-2'>
            <div className='font-bold'>{video?.snippet?.channelTitle}</div>
            <div className='text-gray-500'>{video?.statistics?.commentCount}K subscribers</div>
          </div>
          <button className='ml-4 rounded-md bg-red-500 px-4 py-2 text-white transition-all hover:bg-red-600'>Subscribe</button>
        </div>
        <div className='flex gap-2'>
          <div className='flex h-8 w-max cursor-pointer items-center justify-center gap-2 rounded-full bg-green-200 px-2 text-sm font-semibold transition-all hover:scale-110 hover:bg-green-300 hover:fill-green-800 hover:text-green-800 '>
            <Like className='w-5' />
            {video?.statistics?.likeCount}
          </div>
          <div className='flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-red-200 transition-all hover:scale-110 hover:bg-red-300 hover:fill-red-800  hover:text-red-800 '>
            <Dislike className='w-5' />
          </div>
        </div>
      </div>
      <div className='mt-4'>
        <div className='cursor-pointer border-b border-gray-200 px-2 py-2 font-bold text-gray-800 transition-all hover:bg-gray-200'>Description</div>

        <div className='mt-2 flex gap-4 text-xs font-medium text-gray-500'>
          <div className='flex items-center gap-2'>
            <div>
              <Eye className='w-4 fill-gray-500' />
            </div>
            <div> {(video?.statistics?.viewCount).substring(0, 2)}K View</div>
          </div>
          <div className='flex items-center gap-2'>
            <div>
              <Time className='w-4 fill-gray-500' />
            </div>
            <div>{moment(video?.snippet?.publishTime).startOf('day').fromNow()}</div>
          </div>
        </div>
        <div className='my-2'>
          {video?.snippet?.tags?.map((tag, index) => {
            return (
              <span key={index} className='mr-2 cursor-pointer select-none rounded-md bg-gray-200 px-2 py-1 text-xs font-semibold text-gray-500 transition-all hover:bg-gray-300'>
                #{tag}
              </span>
            );
          })}
        </div>
        <div className='mt-2 text-gray-600'>{(video?.snippet?.description).substring(0, 250) + '...'}</div>
      </div>
    </div>
  );
}

export default DetailCard;
