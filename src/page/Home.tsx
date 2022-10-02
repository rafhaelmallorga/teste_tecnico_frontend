import React, { useState } from 'react'
import Button from '../components/Button'
import Input from '../components/Input'
import { infos } from '../constants/InfoCards'


const Home = () => {
    const [isChecked, setIsChecked] = useState(false)

    return (
        <section className='bg-white w-[608px] h-[480px]  flex justify-center items-center rounded border-[1px] border-[#D1DCE3]'>
            <div className='flex-1 h-full flex flex-col items-center justify-around'>
                <form className='flex flex-col '>
                    <h1 className='text-[#656565] text-[20px] font-bold mb-5'>Simule sua Antecipação</h1>
                    <Input name='amount' label='Informe o valor da venda *' type='number' infos={infos[0]}/>
                    <Input name='installments' label='Em quantas parcelas *' min={1} max={12} type='number' infos={infos[1]}/>
                    <span className='relative bottom-5 text-[11px] text-[#CECECE] font-bold'>Máximo de 12 parcelas</span>
                    <Input name='mdr' label='Informe o percentual de MDR *' type='number' infos={infos[2]}/>
                    <div  className='flex items-center my-2'>
                        <input onClick={() => setIsChecked(!isChecked)} id='days' name='days' type="checkbox" className='mb-[2px] mr-2' value={`${isChecked}`} />
                        <label htmlFor="days" className='text-gray-500 font-bold text-[11px]'>Dias específicos?</label>
                    </div>
                    {isChecked && <Input name='days' label='Informe os dias personalizados *' type='string' infos={infos[3]}/>}
                    <Button />
                </form>
            </div>
            <div className='flex-[0.6] bg-[#D1DCE32E] h-full'>
                <h3>Você receberá</h3>
            </div>
            
        </section>
    )
}

export default Home