import React from 'react';
import { Job } from '../../types/type';
import location from '../../images/location.png';

type Props = {
  job: Job | undefined;
}

export const JobContacts: React.FC <Props> = ({job}) => {
  return (
    <div className='bg-slate-700 w-full rounded-t-lg px-14 py-7'>
      <b className='text-white font-bold mb-2'>
        {job?.name}
      </b>
      <div className='flex items-center mb-2'>
        <img src={location} alt="" className='w-3 h-4 mr-2'/>
        <a 
          href={`https://www.google.com/maps/search/${job?.address}`} 
          className='text-white font-normal block'
          target="_blank"
          rel="noreferrer"
        >
          {job?.address}
        </a>
      </div>
      <a href={`tel:${job?.phone}`} className='text-white font-normal block'>
        {job?.phone}
      </a>
      <a href={`mailto:${job?.email}`} className='text-white font-normal block'>
        {job?.email}
      </a>
    </div>
  )
}