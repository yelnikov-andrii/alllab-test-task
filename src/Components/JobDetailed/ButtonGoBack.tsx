import React from 'react';

type Props = {
  goBack: (arg0: number) => void;
}

export const ButtonGoBack: React.FC <Props> = ({goBack}) => {
  return (
    <button 
      className='w-52 h-12 bg-slate-200 rounded-lg text-slate-700 md:block hidden'
      onClick={() => {
        goBack(-1);
      }}>
      <span className="text-xl w-4 h-4 inline-block">&#10094;</span> Return to job board
    </button>
  )
}