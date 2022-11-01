import React from 'react';

type Props = {
  infoList: string[] | undefined;
  title: string;
  className: string;
}

export const JobAdditionalInfoList: React.FC <Props> = ({infoList, title, className}) => {
  return (
    <>
    <p className='text-lg text-slate-700 mb-2'>
      {title}
    </p>
    <ul className='flex gap-2 mb-6'>
      {infoList?.map(type => (
        <li className={'w-56 h-12 flex items-center justify-center box-border rounded-lg ' + className} key={type}>
          <p className='text-base text-slate-700 font-bold'>
            {type}
          </p>
        </li>
      ))}
    </ul>
    </>
  )
}