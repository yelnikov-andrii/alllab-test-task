import React, { SetStateAction, Dispatch } from 'react';
import { ArrowButton } from './ArrowButton';
import { Page } from './Page';

type Props = {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  pages: number[];
}

export const Pagination: React.FC <Props> = ({page, setPage, pages}) => {
  return (
    <div className='rounded-lg w-5/6 max-width-10 md:w-1/3 mx-auto px-6 h-12 flex justify-between bg-white'>
      <ArrowButton
        page={page}
        setPage={setPage}
        left={true}
        content='&#8249;'
        len={pages.length}
       />
      <div>
      {pages.map((p: number) => (
        <Page 
          p={p}
          page={page}
          setPage={setPage}
          key={p}
        />
      ))}
      </div>
      <ArrowButton
        page={page}
        setPage={setPage}
        left={false}
        content='&#8250;'
        len={pages.length}
      />
    </div>
  )
}