import React from 'react'
import Paragraph from './Paragraph'

const BlankAnticipation = () => {
  return (
    <div className='w-full h-full flex flex-col items-start justify-center p-8'>
        <h3 className='text-[15px] text-[#3D75BB] font-bold border-solid border-b-[1px] border-[#5D9CEC] w-full mb-6'>VOCÊ RECEBERÁ:</h3>
        <Paragraph text='Amanhã: ' price={0}/>
        <Paragraph text='Em 15 dias:  ' price={0}/>
        <Paragraph text='Em 30 dias: ' price={0}/>
        <Paragraph text='Em 90 dias: ' price={0}/>
    </div>
  )
}

export default BlankAnticipation