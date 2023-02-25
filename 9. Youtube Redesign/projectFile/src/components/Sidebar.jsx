import React, { useState } from 'react';
import dataSidebar from '../assets/data/dataSidebar';

import classNames from 'classnames';

import { motion } from 'framer-motion';

function Sidebar() {
  const [activeTab, setActiveTab] = useState('Home');
  return (
    <div className='md:block hidden mt-6'>
      {dataSidebar.map((data, index) => {
        return (
          <div className='flex items-center' key={index}>
            {activeTab === data.name && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className='absolute h-6 w-1 rounded-r-full bg-red-500'></motion.div>}
            <div className='flex cursor-pointer gap-2 py-5 px-8' onClick={() => setActiveTab(data.name)}>
              <span
                className={classNames({
                  'w-5 items-center fill-gray-800 transition-all duration-500': true,
                  'fill-current text-red-500': activeTab === data.name,
                })}
              >
                {data.icon}
              </span>
              {activeTab === data.name && (
                <motion.span initial={{ opacity: 0.5 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className='select-none font-semibold'>
                  {data.name}
                </motion.span>
              )}
              {activeTab !== data.name && (
                <span initial={{ opacity: 0.5 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className='select-none font-medium text-gray-800'>
                  {data.name}
                </span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Sidebar;
