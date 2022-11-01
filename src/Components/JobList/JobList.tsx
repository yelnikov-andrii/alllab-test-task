import React, { Dispatch, SetStateAction} from 'react';
import { Job } from '../../types/type';
import { JobItem } from './JobItem';
import { Pagination } from './Pagination';

  type Props = {
    jobs: Job[];
    savedJob: string[];
    setSavedJob: Dispatch<SetStateAction<any>>;
  }

export const JobList: React.FC <Props> = ({jobs, savedJob}) => {
  const [page, setPage] = React.useState(1);
  const jobsPerPage = 5;
  const lastElement = page * jobsPerPage;
  const firstElement = lastElement - jobsPerPage + 1;
  const countOfPages = Math.ceil(jobs.length / jobsPerPage);

  const pages: number[] = [];

  for (let i = 1; i <= countOfPages; i++) {
    pages.push(i);
  }

  const visibleContent = jobs.slice(firstElement, lastElement);

  return (
    <section className='bg-slate-200 pt-7 pb-16'>
      <div className='max-w-screen-xl mx-auto my-0 px-2'>
      <div className='mb-12 bg-slate-100 md:bg-white'>
        {visibleContent.map(job => (
          <JobItem job={job} key={job.id} savedJob={savedJob}/>
        ))}
      </div>
      <Pagination 
        page={page} 
        setPage={setPage}
        pages={pages}
      />
      </div>
    </section>
  )
}