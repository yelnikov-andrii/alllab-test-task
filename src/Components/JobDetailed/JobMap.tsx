import React from 'react';
import { Job } from '../../types/type';

type Props = {
  job: Job | undefined;
}

export const JobMap: React.FC <Props> = ({job}) => {
  return (
    <iframe
      className='w-full h-auto rounded-b-lg bg-slate-700'
      frameBorder="0" style={{border: '0'}}
      referrerPolicy="no-referrer-when-downgrade"
      src={`https://www.google.com/maps/embed/v1/view?key=AIzaSyB-g3Y4YN-JjX9mmBfd60kNrAKeC55ZPkc&center=${job?.location.lat.toString()},${job?.location.long.toString()}
      &zoom=8
      &maptype=satellite`}
      allowFullScreen
      title='dfsfd'>
    </iframe>
  )
}