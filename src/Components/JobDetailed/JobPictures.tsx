import React from 'react';
import { Job } from '../../types/type';

type Props = {
  job: Job | undefined;
}

export const JobPictures: React.FC <Props> = ({job}) => {
  return (
    <ul className='flex gap-2 overflow-x-hidden'>
      {job?.pictures.map((picture, i) => (
        <li key={picture + i}>
          <img src={picture} alt="" className='w-52 h-32 rounded-lg'/>
        </li>
      ))}
    </ul>
  )
}