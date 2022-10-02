import React, { InputHTMLAttributes } from 'react'
import MoreInfo from './MoreInfo';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
    type: string;
    infos: {
      title: string;
      text: string
  }
}

const Input = ({name, type, label, infos, ...rest}: InputProps) => {
  return (
    <>
        <div className='flex'>
          <label htmlFor={name} className="text-[#656565] text-[14px] mb-1 mr-2">{label}</label>
          <MoreInfo infos={infos} />
        </div>
        <input id={name} name={name} type={type} min="0" {...rest} className={`h-9 border-[1px] px-4 ${name === 'mdr' ? "mb-0" : "mb-6"} rounded outline-none `}/>
    </>
  )
}

export default Input