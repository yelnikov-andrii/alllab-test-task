import React from 'react';
import { Job } from '../../types/type';
import locationImg from '../../images/location.png';
import { Link } from 'react-router-dom';

type Props = {
  job: Job;
}

export const JobInfo: React.FC <Props> = ({job}) => {
  return (
    <div className='flex flex-col w-full md:w-4/6'>
      <Link to={job.id}>
      <b className='font-bold text-cyan-700 mb-1 md:mb-2 text-lg md:text-xl'>
        {job.name}
      </b>
      </Link>
      <p className='text-slate-400 text-base mb-2'>
        {job.title}
      </p>
      <div className='flex items-center'>
        <img 
          src={locationImg}
          alt=""
          className='w-3 h-4 mr-2'
        />
        <a 
          className="text-slate-400 text-base m-0" 
          href={`https://www.google.com/maps/search/${job?.address}`}
          target="_blank"
          rel="noreferrer"
        >
          {job.address}
        </a>
      </div>
    </div>
  )
}