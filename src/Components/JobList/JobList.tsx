import React, { Dispatch, SetStateAction} from 'react';
import { Job } from '../../types/type';
import { JobItem } from './JobItem';
import { Pagination } from './Pagination';
import ContentLoader from 'react-content-loader';

  type Props = {
    jobs: Job[];
    savedJob: string[];
    setSavedJob: Dispatch<SetStateAction<any>>;
    isLoading: boolean;
  }

export const JobList: React.FC <Props> = ({jobs, savedJob, isLoading}) => {
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

  if (isLoading) {
    return (
      <div className='max-w-screen-xl w-full mx-auto'>
        <ContentLoader 
          speed={2}
          width={1200}
          height={700}
          viewBox="0 0 600 500"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="67" y="53" rx="0" ry="0" width="1200" height="52" /> 
          <rect x="68" y="116" rx="0" ry="0" width="1200" height="52" /> 
          <rect x="69" y="183" rx="0" ry="0" width="1200" height="52" /> 
          <rect x="69" y="250" rx="0" ry="0" width="1200" height="52" /> 
          <rect x="72" y="319" rx="0" ry="0" width="1200" height="52" />
        </ContentLoader>
      </div>
    )
  }

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