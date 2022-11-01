import React, { Dispatch, SetStateAction} from 'react';
import markImg from '../../images/mark.png';
import markSm from '../../images/mark_sm.png';
import shareIcon from '../../images/shareIcon.png';
import { LinkedinShareButton } from 'react-share';
import { Job } from '../../types/type';

type Props = {
  job: Job | undefined;
  setSavedJob: Dispatch<SetStateAction<any>>;
  savedJob: string[];
}

export const JobActions: React.FC <Props> = ({job, setSavedJob, savedJob}) => {
  
  return (
    <div className='flex md:items-center'>
      <picture 
      onClick={() => {
        setSavedJob((savedJobs: any) => [...savedJobs, job?.id])
      }}
      className={job?.id && savedJob.includes(job.id) ? 'md:flex items-center hover:cursor-pointer justify-center w-4 h-5 mr-4 bg-slate-700' : 'md:flex items-center justify-center w-4 h-5 mr-4 hover:cursor-pointer'}>
        <source media="(min-width:768px)" srcSet={markImg} />
        <source media="(min-width:320px)" srcSet={markSm} />
        <img src={markSm} alt=""/>
      </picture>
      <p 
        onClick={() => {
          setSavedJob((savedJobs: any) => [...savedJobs, job?.id])
        }}
        className='text-lg mr-8 text-slate-700 hover:cursor-pointer'>
        save to my list
      </p>
      <LinkedinShareButton
        title={job?.name}
        summary={job?.description}
        source={`jobs/${job?.id}`}
        className="article__icon"
        url='jobs'
        >
          <img src={shareIcon} alt="" className='w-4 h-5 mr-4'/>
        </LinkedinShareButton>
      <p className='text-lg mr-8 text-slate-700'>
        share
      </p>
      </div>
  )
}