import classNames from 'classnames';
import { useState } from 'react';
import dataFilter from '../assets/data/dataFilter';

function Filter({ setKeyword }) {
  const [activeFilter, setActiveFilter] = useState(1);

  return (
    <div className='my-2 flex w-full items-center gap-2 overflow-x-scroll border-y border-gray-300 py-4'>
      {dataFilter.map((data, index) => (
        <div
          onClick={() => {
            setActiveFilter(data.id);
            setKeyword(data.name);
          }}
          key={index}
          className={classNames({
            'w-max cursor-pointer rounded-full border-[1.5px] border-black px-4 py-1 text-sm font-medium transition-all hover:bg-black hover:text-white': true,
            'bg-black text-white': activeFilter === data.id,
          })}
        >
          {data.name}
        </div>
      ))}
    </div>
  );
}

export default Filter;
