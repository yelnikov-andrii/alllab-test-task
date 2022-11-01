import React, { Dispatch, SetStateAction } from 'react';

type Props = {
  p: number;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
}

export const Page: React.FC <Props> = ({p, page, setPage}) => {
  return (
    <button 
      className={page === p ? 'w-8 h-full border-b-2 text-cyan-700 border-cyan-700 border-solid' : 'w-8 h-8 text-cyan-700'}
      onClick={() => {
        setPage(p);
      }}
    >
      {p}
    </button>
  )
}