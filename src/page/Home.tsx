import React, { useState } from 'react'
import Button from '../components/Button'
import Input from '../components/Input'
import { infos } from '../constants/InfoCards'
import * as yup from 'yup'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { ICalcForm } from '../interface/calcForm'
import api from '../api'
import { toast } from 'react-hot-toast'



const Home = () => {
    const [isChecked, setIsChecked] = useState(false)

    const schema = yup.object().shape({
        amount: yup.number().typeError("Campo obrigatório"),
        installments: yup.number().typeError("Campo obrigatório").min(1, "No mínimo uma parcela.").max(12, "No máximo 12 parcelas.").required("Campo obrigatório"),
        mdr: yup.number().typeError("Campo obrigatório").min(0, "O juros não pode ser negativo.").required(),
        days: yup.string()
    })

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ICalcForm>({ resolver: yupResolver(schema)})


    const handleSim = async (data: ICalcForm) => {
        const amountInCents = data.amount * 100;
        const daysArray = data.days?.split(',').map((n: any) => Number(n))

        data = {...data, amount: amountInCents}

        if (daysArray) {
            data = {...data, days: daysArray}
        }

        if (!isChecked && data.days) {
            let entries = Object.entries(data).map(entry => {
                if ( entry[0] !== 'days' ) {
                    return entry
                }
            })

            let newData: any = {}

            entries.forEach((e) => {
                if (e !== undefined) {
                    newData[e[0]] = e[1]
                }
            })

            data = newData
        }

        console.log(data)

        await api.post('', data).then(res => { 
            console.log(res.data)
            toast.success("Sucesso!")
        })
        .catch((_) => toast.error("Algo deu errado!"))
    }

    console.log(errors)

    return (
        <section className='bg-white w-[608px] h-[550px]  flex justify-center items-center rounded border-[1px] border-[#D1DCE3]'>
            <div className='flex-1 h-full flex flex-col items-center justify-around'>
                <form onSubmit={handleSubmit(handleSim)} className='flex flex-col '>
                    <h1 className='text-[#656565] text-[20px] font-bold mb-5'>Simule sua Antecipação</h1>
                    <Input name='amount' placeholder='Ex: R$ 1000.00' label='Informe o valor da venda *' type='number' infos={infos[0]} register={register} error={errors.amount?.message}/>
                    <Input name='installments' placeholder='Ex: 6' label='Em quantas parcelas *' min={1} max={12} type='number' infos={infos[1]} register={register} error={errors.installments?.message}/>
                    <span className='relative bottom-5 text-[11px] text-[#CECECE] font-bold'>Máximo de 12 parcelas</span>
                    <Input name='mdr' placeholder='Ex: 4' label='Informe o percentual de MDR *' type='number' infos={infos[2]} register={register} error={errors.mdr?.message}/>
                    <div  className='flex items-center my-2'>
                        <input onClick={() => setIsChecked(!isChecked)} id='days' name='days' type="checkbox" className='mb-[2px] mr-2' value={`${isChecked}`} />
                        <label htmlFor="days" className='text-gray-500 font-bold text-[11px]'>Dias específicos?</label>
                    </div>
                    {isChecked && <Input name='days' placeholder='Ex: 15, 30, 45, 60' label='Informe os dias personalizados *' type='string' infos={infos[3]} register={register} error={errors.days?.message}/>}
                    <Button type='submit' />
                </form>
            </div>
            <div className='flex-[0.6] bg-[#D1DCE32E] h-full'>
                <h3>Você receberá</h3>
            </div>
            
        </section>
    )
}

export default Home