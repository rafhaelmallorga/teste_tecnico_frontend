import React from 'react'

interface Props {
    text: any;
    price: any;
}

const Paragraph = ({text, price}: Props) => {
  return (
    <p className='text-[14px] text-[#5D9CEC] w-full py-3'>{text}<span className='font-bold'>R$ {price.toFixed(2)}</span></p>
  )
}

export default Paragraph