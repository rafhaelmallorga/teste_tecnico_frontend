import React, { ButtonHTMLAttributes, ReactNode } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
}

const Button = ({children, ...rest}: Props) => {
  return (
    <button {...rest} className='bg-blue-400 h-9 rounded text-white font-bold hover:brightness-90'>Gerar Simulação</button>
  )
}

export default Button