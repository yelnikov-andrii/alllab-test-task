import React, { Dispatch, SetStateAction} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Job } from '../../types/type';
import { Title } from '../../UI/Title';
import { JobActions } from './JobActions';
import { Button } from '../../UI/Button';
import { JobSalary } from './JobSalary';
import { JobAdditionalInfoList } from './JobAdditionalInfoList';
import { JobPictures } from './JobPictures';
import { JobMap } from './JobMap';
import { JobContacts } from './JobContacts';
import { ButtonGoBack } from './ButtonGoBack';

type Props = {
  jobs: Job[];
  savedJob: string[];
  setSavedJob: Dispatch<SetStateAction<any>>;
}

export const JobDetailed: React.FC <Props> = ({jobs, savedJob, setSavedJob}) => {
  const params = useParams();
  const job = jobs.find(job => job.id === params.id);
  const navigate = useNavigate();

  return (
    <section className='pt-14 pb-40 px-2'>
      <div className='mx-auto max-w-screen-xl flex flex-col md:flex-row md:justify-between mb-20'>
      <div className='w-full md:w-3/5 flex flex-col'>
        <div className='w-full flex flex-col md:flex-row md:items-center justify-between border-none md:border-solid border-b-2 border-slate-700 border-opacity-10 pb-2 mb-10'>
          <Title title="Job detiails" />
          <JobActions job={job} savedJob={savedJob} setSavedJob={setSavedJob}/>
        </div>
        <div className='mb-8 hidden md:block'>
          <Button />
        </div>
        <div className='flex flex-col md:flex-row'>
          <b className='text-lg mr-8 text-slate-700 max-w-lg mb-2'>
            {job?.title}
          </b>
          <JobSalary job={job} />
        </div>
        <div className='mb-10'>
          <p className='text-md text-slate-700 text-opacity-30 mb-2 -translate-y-10 md:-translate-y-0'>
            Posted 2 days ago
          </p>
          <p className='text-md text-slate-700 w-full mb-10'>
            {job?.description}
          </p>
          <div className='flex justify-center md:block'>
            <Button />
          </div>
        </div>
        <div className='mb-20 flex flex-col order-2 md:order-1 md:block'>
          <div className='border-b-2 border-slate-700 border-none md:border-solid border-opacity-10 pb-2 mb-4'>
            <Title title="Additional info" />
          </div>
          <JobAdditionalInfoList 
            infoList={job?.employment_type} 
            title="Employment type"
            className='bg-slate-300 border-slate-700 border border-opacity-30'
          />
            <JobAdditionalInfoList 
              infoList={job?.benefits} 
              title="Benefits"
              className='bg-amber-400 bg-opacity-30 border-amber-400 border border-opacity-70'
            />
        </div>
        <div className='flex flex-col order-1 md:order-2 md:block mb-10'>
        <div className='border-b-2 border-slate-700 border-none md:border-solid border-opacity-10 pb-2 mb-4'>
          <Title title="Attached images" />
        </div>
          <JobPictures job={job} />
        </div>
      </div>
      <div className='md:w-1/3 w-full'>
        <div className='md:hidden'>
          <Title title="Contacts" />
        </div>
        <JobContacts job={job} />
        <div>
        <JobMap job={job}/>
        </div>
      </div>
      </div>
      <div className='mx-auto max-w-screen-xl'>
      <ButtonGoBack goBack={navigate} />
      </div>
    </section>
  )
}