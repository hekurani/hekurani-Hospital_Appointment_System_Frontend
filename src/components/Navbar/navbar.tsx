import React from 'react';
import Link from 'next/link';
import { Search, Menu, Settings } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { toggleSidebar } from '@/redux/slices/globalSlice';

const Navbar = () => {
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector((state) => state.global.isSidebarCollapsed);

    // Mock user data
    const user = {
      name: "John Doe",
      profilePic: "https://i.pravatar.cc/40?img=3" // Placeholder image (random avatar)
    };

  return (
    <div className='flex items-center justify-between bg-white px-4 py-3'>
        <div className='flex items-center gap-8'>
        {!isSidebarCollapsed ? null : (
            <button onClick={()=>dispatch(toggleSidebar(!isSidebarCollapsed))}>
              <Menu className='h-8 w-8 dark:text-white cursor-pointer'/>
            </button>
          )}

<div className='relative flex h-min w-[200px]'>{/* relative ne parent component edhe absolute ne children qe ikona mu kan left side of container */}
                <Search className='absolute left-[4px] top-1/2 mr-2 h-5 w-5 -translate-y-1/2 transform cursor-pointer dark:text-white'/>
                <input
                 className='w-full rounded border-none bg-gray-100 p-2 pl-8 placeholder-gray-500 focus:border-transparent focus:outline-none dark:bg-gray-700 dark:text-white dark:placeholder-white' type='search' placeholder='Search...'
                />
            </div>
        </div>

        <div className='flex items-center mr-15'>
            <Link href="/settings" className='h-min w-min rounded p-2 hover:bg-gray-100'>
              <Settings className='h-6 w-6 cursor-pointer'/>
            </Link>

            <div className='ml-2 mr-5 hidden min-h-[2em] w-[0.1rem] bg-gray-200 md:inline-block'>
              {/* User Profile Section */}
        <Link href="/profile" className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 px-3 py-1 rounded-lg">
          {/* Profile Picture */}
          <img
            src={user.profilePic}
            alt="User Profile"
            className="h-9 w-9 rounded-full border border-gray-300"
          />
          {/* User Name */}
          <span className="text-gray-800 font-medium text-sm">{user.name}</span>
        </Link>

            </div>
        </div>

    </div>
  )
}

export default Navbar;