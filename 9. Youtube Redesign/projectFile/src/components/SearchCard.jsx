import moment from 'moment';
import { Eye, Time } from '../assets/icon';

function SearchCard({search}) {
  return (
    <div onClick={() => window.location = `/video/${search?.id?.videoId}`} className='flex cursor-pointer gap-4'>
      <div className='w-2/5 rounded-xl'>
        <img className='rounded-xl' src={search?.snippet?.thumbnails?.medium?.url} alt='thumbnail' />
      </div>
      <div className='w-3/5'>
        <h1 className='text-lg font-bold'>{(search?.snippet?.title).substring(0,25) + "..."}</h1>
        <div className='mt-2 flex items-center gap-4 text-xs font-medium text-gray-500'>
          <div className='flex items-center gap-2'>
            <div>
              <Eye className='w-4 fill-gray-500' />
            </div>
            <div> 12K View</div>
          </div>
          <div className='flex items-center gap-2'>
            <div>
              <Time className='w-4 fill-gray-500' />
            </div>
            <div>{moment(search?.snippet?.publishTime).startOf('day').fromNow()}</div>
          </div>
          <div className='flex cursor-pointer items-center gap-2 rounded-full text-xs'>
            <div className='h-5 w-5 rounded-full'>
              <img className='h-5 w-5 rounded-full' src={search?.snippet?.thumbnails?.medium?.url} alt='profile' />
            </div>
            <div>{(search?.snippet?.channelTitle).substring(0,15)}</div>
          </div>
        </div>

        <p className='text-sm text-gray-500'>{search?.snippet?.description}</p>
      </div>
    </div>
  );
}

export default SearchCard;
