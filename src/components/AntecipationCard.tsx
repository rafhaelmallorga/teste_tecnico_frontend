import React from 'react'
import Loading from './Loading'
import Paragraph from './Paragraph'

const AntecipationCard = ({infos, loading}: any) => {

    let infosFormated = []

    for (let key in infos) {
        if (Number(key) <= 1) {
            infosFormated.push(['Amanhã: ', (infos[key] / 100)])
        } else {
            infosFormated.push([`Em ${key} dias: `, (infos[key] / 100)])
        }
    }

    return (
        <div className={`w-full h-full flex flex-col items-start ${loading && 'items-center'} justify-center p-8`}>
            { loading ?
                (
                    <Loading type='spinningBubbles' color='#3d76bb9e'/>
                )
                :
                (
                    <>
                    <h3 className='text-[15px] text-[#3D75BB] font-bold border-solid border-b-[1px] border-[#5D9CEC] w-full mb-6'>VOCÊ RECEBERÁ:</h3>
                    {infosFormated?.map(info => (<Paragraph key={info[0]} text={info[0]} price={info[1]}/>))}
                    </>
                )
            }
        </div>
    )
}

export default AntecipationCard