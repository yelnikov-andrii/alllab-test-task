import React from 'react';
import { Job } from '../../types/type';

type Props = {
  job: Job | undefined;
}

export const JobSalary: React.FC <Props> = ({job}) => {
  return (
    <div className='self-end flex flex-col-reverse md:block md:self-auto'>
      <p className='text-lg text-slate-700'>
      &euro; {job?.salary.replaceAll('k', ' 000')}
      </p>
      <p className='text-md text-slate-700'>
        Brutto, per year
      </p>
      </div>
  )
}