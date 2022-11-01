import React, { Dispatch, SetStateAction } from 'react';

type Props = {
page: number;
setPage: Dispatch<SetStateAction<number>>;
left: boolean;
content: string;
len: number;
}

export const ArrowButton: React.FC <Props> = ({page, setPage, left, content, len}) => {
  return (
    <button
      className={page === 1 && left ? 'text-2xl opacity-40' : page === len && !left ? 'text-2xl opacity-40': 'text-2xl'}
      onClick={() => {
        if (page > 1 && left) {
          setPage(page => page - 1);
        }
        if (!left && page < len) {
          setPage(page => page + 1)
        }
      }}>
      {content}
    </button>
  )
}