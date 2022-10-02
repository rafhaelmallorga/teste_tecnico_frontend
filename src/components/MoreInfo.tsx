import React, { useState } from 'react'

export interface InfoProps {
    infos: {
        title: string;
        text: string
    }
}

const MoreInfo = ({infos}: InfoProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <>
            <span onClick={() => setIsOpen(!isOpen)} className={`bg-blue-300 text-gray-100 text-sm w-4 h-4 mt-[1px] rounded-full flex items-center justify-center font-bold cursor-pointer hover:brightness-90`}>?</span>
            
            <div onClick={() => setIsOpen(!isOpen)} className={`${isOpen ? "block" : "hidden"} bg-[#0007]  absolute z-10 w-full h-full left-0 top-0 flex items-center justify-center`}>
                <div className='bg-white w-80  rounded-lg p-6'>
                    <span className='relative left-[270px] bottom-4 font-bold cursor-pointer'>X</span>
                    <h4 className='text-[24px] font-bold'>{infos.title}</h4>
                    <p className='text-left'>{infos.text}</p>
                </div>
            </div>
        </>
    )
}

export default MoreInfo