import React, { useState } from "react";
import Image from 'next/image'
import {HomeIcon,SearchIcon,ShareIcon,AdjustmentsIcon,CameraIcon,UserIcon} from '@heroicons/react/solid';
import MainIcon from "./MainIcon";
import { useSession, signIn, signOut } from "next-auth/client"


export const Header: React.FC = () => {
  const [session, loading] = useSession()
  console.log({session, loading} )
  // const [info, setinfo] = useState({...session})
  return (
    <div className="p-3 justify-between shadow-md xl:grid xl:grid-flow-col xl:grid-cols-3 sm:grid sm:grid-cols-2 sm:grid-rows-1 grid-rows-1">
      <div className='flex sm:col-span-2 lg:col-span-2 xl:col-span-1 align-center lg:justify-start sm:justify-between'>
      
        <h1 className='text-3xl mr-5 animate-bounce text-green-800 font-medium	'>Technocodz.com</h1>

          <div className='flex bg-gray-400 items-center rounded-full'>
          <SearchIcon className='h-10  text-gray-50 p-2 ' />
          <input type='text' className='h-10 w-64 hover:hidden text-white placeholder-white  bg-transparent outline-none' placeholder='search' />
          </div>

      </div>
      
      <div className='items-center sm:mt-5 xl:mt-0 flex justify-center'>
          <MainIcon Icon={HomeIcon} />
          <MainIcon Icon={ShareIcon} />
          <MainIcon Icon={AdjustmentsIcon} />
          <MainIcon Icon={CameraIcon} />
      </div>

      <div className='flex items-center  justify-end'>
        <button onClick={() => {session ? signOut()  : signIn()}} className=' bg-blue-600 px-4  text-white text-1xl rounded-xl mr-4 p-2'>{session ? "Sign Out"  :" Log IN"}</button>
        {session ? <img src={session ? `${session?.user?.image}` : ""} className='mx-4 rounded-full' width={40}
      height={40} alt="Picture of the author" /> : ''}
          <h1 className='text-2xl animate-bounce'>{session ? `${session?.user?.name}` : ''}</h1>
      </div>

    </div>
  );
};
