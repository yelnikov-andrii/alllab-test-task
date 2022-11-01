import React from 'react';
import { Job } from '../../types/type';
import { JobInfo } from './JobInfo';
import { JobRating } from './JobRating';
import markImg from '../../images/mark.png';
import { Link } from 'react-router-dom';

type Props = {
  job: Job;
  savedJob: string[];
}

export const JobItem: React.FC <Props> = ({job, savedJob}) => {
  return (
    <div className="flex justify-between shadow-lg rounded-lg px-4 py-6">
      <Link to={job.id}>
        <img src={job.pictures[0]} alt="" className='rounded-full w-20 h-20 mr-4 self-center'/>
      </Link>
      <div className='flex w-4/6 md:w-11/12 flex-col-reverse md:justify-between md:flex-row'>
      <JobInfo job={job} />
      <div className='flex gap-10 mb-2'>
      <JobRating />
      <div className='flex flex-col items-end justify-between'>
        <img src={markImg} alt="" className={job?.id && savedJob.includes(job.id) ? 'md:block hidden w-4 h-5 bg-slate-700' : 'md:block hidden w-4 h-5'}/>
        <p className="text-slate-400 text-sm md:text-base m-0">
          Posted 2 days ago
        </p>
      </div>
      </div>
      </div>
    </div>
  )
}