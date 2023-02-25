import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RiSearch2Line, RiAppsLine } from 'react-icons/ri';
import { TiMicrophone } from 'react-icons/ti';
import { Link } from 'react-router-dom';

import { ClapperBoard } from '../assets/icon';

import youtubeLogo from '../assets/images/logo.svg';
import profilePhoto from '../assets/images/profile.jpg';

function Navbar() {
  const [searchKeyword, setSearchKeyword] = useState('');

  const onKeyFunction = (e) => {
    if (e.key === 'Enter') {
     searchFunction();
    }
  };

  const searchFunction = () => {
    if (searchKeyword.length > 0) {
      window.location.href = `/search/${searchKeyword}`;
    }
  }

  return (
    <div className='flex w-full items-center justify-between md:px-10 px-5 py-2 shadow-sm'>
      <div className='flex items-center'>
        <div>
          <GiHamburgerMenu size={24} />
        </div>
        <div className='mx:w-20 ml-12 w-24'>
          <Link to='/'>
            <img className='w-24 md:w-20' src={youtubeLogo} alt='youtubeLogo' />
          </Link>
        </div>
        <div className='ml-10 hidden w-max items-center rounded-full border-[0px] border-gray-300 py-[3px] pr-2 pl-2 md:flex md:w-96 md:border-[1.5px] md:pr-[3px] md:pl-3 lg:w-[28rem]'>
          <div className='hidden w-full text-sm md:flex'>
            <input value={searchKeyword} onChange={(e) => setSearchKeyword(e.target.value)} onKeyPress={onKeyFunction} className='w-full bg-transparent pr-2 outline-none' type='text' placeholder='Search' />
          </div>
          <div onClick={searchFunction} className='cursor-pointer rounded-full bg-gray-200 px-4 py-2 text-gray-800 transition-all hover:bg-gray-300'>
            <RiSearch2Line />
          </div>
        </div>
        <div className='ml-4 hidden cursor-pointer rounded-full bg-black p-3 text-white transition-all hover:-translate-y-1 hover:shadow-md md:flex'>
          <TiMicrophone size={18} />
        </div>
      </div>
      <div className='flex items-center gap-4'>
        <div className='hidden cursor-pointer rounded-full bg-gray-200 p-[14px] text-gray-800 transition-all hover:bg-gray-300 lg:flex'>
          <RiAppsLine size={20} />
        </div>
        <div className='hidden cursor-pointer items-center gap-2 rounded-full bg-black fill-white p-[14px] text-sm text-white transition-all hover:shadow-md md:flex lg:px-6 lg:py-[14px]'>
          <div>
            <ClapperBoard width='16px' />
          </div>
          <div className='hidden w-max lg:flex'>New Video</div>
        </div>
        <div className='flex cursor-pointer rounded-full bg-gray-200 p-4 text-gray-800 transition-all hover:bg-gray-300 md:hidden'>
          <RiSearch2Line />
        </div>
        <div className='w-12 cursor-pointer rounded-full transition-all hover:scale-105'>
          <img className='rounded-full' src={profilePhoto} alt='profilePhoto' />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
