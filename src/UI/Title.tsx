import React from 'react';

type Props = {
  title: string;
}

export const Title: React.FC <Props> = ({title}) => {
  return (
    <b className='text-3xl font-bold text-slate-700 mb-4 md:mb-0 pb-4 border-slate-700 border-b-2 border-opacity-10 md:border-none block'>
      {title}
    </b>
  )
}