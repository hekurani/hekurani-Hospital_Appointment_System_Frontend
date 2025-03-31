import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { toggleSidebar } from '@/redux/slices/globalSlice';
import React from 'react'
import { X, Search, Hospital, Settings, User, LockIcon, LucideIcon, LayoutDashboard, Calendar, Activity, MapPin, CreditCard } from "lucide-react";
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector((state) => state.global.isSidebarCollapsed);

  const sidebarClassNames = `fixed flex flex-col h-[100%] justify-between shadow-xl 
    transition-all duration-300 h-full z-40 overflow-y-auto bg-white 
    ${isSidebarCollapsed ? "w-0 hidden" : "w-64"}
    `;

  return (
    <div className={sidebarClassNames}>
        <div className='flex h-[100%] w-full flex-col justify-start'>
            <div className='z-50 flex min-h-[56px] w-64 items-center justify-between bg-white px-6 pt-3'>
                <div className='text-xl font-bold text-gray-800'>
                    HospitalApp
                </div>
                {isSidebarCollapsed ? null : (
                    <button 
                      className='py-3' 
                      onClick={() => {dispatch(toggleSidebar(!isSidebarCollapsed))}}>
                        <X className='h-6 w-6 text-gray-800 hover:text-gray-500 cursor-pointer'/>
                    </button>
                )}
            </div>

            <div className='flex items-center gap-5 border-y-[1.5px] border-gray-200 px-8 py-4'>
                <Image src="/hospital-logo.avif" alt='Logo' width={40} height={40}/>
                <div>
                    <h3 className='text-md font-bold tracking-wide'>
                        Hospital System
                    </h3>
                    <div className='mt-1 flex items-start gap-2'>
                        <LockIcon className='mt-[0.1rem] h-3 w-3 text-gray-500'/>
                        <p className='text-xs text-gray-500'>Private</p>
                    </div>
                </div>
            </div>

            <nav className='z-10 w-full'>
                <SidebarLink icon={LayoutDashboard} label='Dashboard' href='/'/>
                <SidebarLink icon={Hospital} label='Hospital' href='/hospital'/>
                <SidebarLink icon={Calendar} label='Appointments' href='/appointments'/>
                <SidebarLink icon={User} label='Doctor' href='/doctor'/>
                <SidebarLink icon={Activity} label='Patients' href='/patients'/>
                <SidebarLink icon={CreditCard} label='Billings' href='/billings'/>
                <SidebarLink icon={Settings} label='Settings' href='/settings'/>
                <SidebarLink icon={MapPin} label='Location' href='/location'/>
            </nav>

        </div>
    </div>
  )
}

export default Sidebar;

interface SidebarLinkProps {
    href: string;
    icon: LucideIcon;
    label: string;
}

const SidebarLink = ({ href, icon: Icon, label }:SidebarLinkProps) => {
    const pathname = usePathname();
    const isActive = pathname === href || (pathname==='/' && href === "/dashboard");

    return (
        <Link href={href} className='w-full'>
            <div className={`relative flex cursor-pointer items-center gap-3 transition-colors hover:bg-gray-100 ${
          isActive ? "bg-gray-100 text-white" : ""
        } justify-start px-8 py-3`}>
            {isActive && (
                <div className='absolute left-0 top-0 h-[100%] w-[5px] bg-blue-200'/>
            )}

            <Icon className='h-6 w-6 text-gray-800'/>
            <span className={`font-medium text-gray-800`}>
                {label}
            </span>
        </div>
        </Link>
    );
}