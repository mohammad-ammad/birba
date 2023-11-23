'use client'
import Image from 'next/image'
import React from 'react'

const LandingSpeakerCard = ({item}) => {
  return (
    <div>
        <div className='flex justify-between items-center'>
            <Image src={item.icon} width={80} height={80}/>
            <p className='bg-[#003756] text-white w-10 h-10 inline-flex justify-center items-center rounded-md'>{item.num}</p>
        </div>

        <div className='flex justify-start items-center gap-2 rounded-md my-2 p-5' style={{boxShadow: "0px 4px 18px 0px rgba(0, 0, 0, 0.1)"}}>
            <div>
                <Image src={item.profile} alt='profile' width={100} height={100} />
            </div>
            <div>
                <p className='text-[10px] font-semibold'>Speaker</p>
                <h1 className='text-[14px] font-bold'>{item.name}</h1>
                <p className='text-[9px] font-semibold'>{item.tagline}</p>
            </div>
        </div>
    </div>
  )
}

export default LandingSpeakerCard