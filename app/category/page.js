import Link from 'next/link';
import React from 'react'

const bannerStyles = {
    backgroundImage: "url('/assets/r6.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white",
    textAlign: "center",
    padding: "50px 10px",
    width: "100%",
  };
const Category = () => {
    const data = [
        {
            title:"Agenda",
            link:"/agenda"
        },
        {
            title:"GHSO23 Workshop",
            link:"/events"
        },
        {
            title:"EEC 2023",
            link:"/events"
        },
        {
            title:"EU-GCC GHSO EVENT",
            link:"/events"
        },
        {
            title:"TecH2 Talks",
            link:"/events"
        },
        {
            title:"Partners and Sponsors",
            link:"/partners"
        },
        {
            title:"Speakers",
            link:"/speakers"
        },
        {
            title:"Exhibitor",
            link:"/exhibitors"
        },
        {
            title:"Exhibitor",
            link:"/exhibitors"
        },
        {
            title:"Exhibitor",
            link:"/exhibitors"
        },
        {
            title:"Exhibitor",
            link:"/exhibitors"
        },
        {
            title:"Exhibitor",
            link:"/exhibitors"
        },
        {
            title:"Exhibitor",
            link:"/exhibitors"
        },
        {
            title:"Exhibitor",
            link:"/exhibitors"
        },
        {
            title:"Exhibitor",
            link:"/exhibitors"
        },
        {
            title:"Exhibitor",
            link:"/exhibitors"
        },
    ];
  return (
    <div className="py-20 bg-[#f8f8f8]">
        <div style={bannerStyles}>
        <div className="text-3xl font-bold">Category</div>
      </div>

      <section className='px-5 md:px-56 mt-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-1'>
            {
                data.map((el,i) => (
                    <Link href={el.link} key={i} className='md:w-[380px] h-[86px] text-[20px] rounded-md inline-flex justify-center items-center text-white bg-[#AE0243]' >
                        <p>{el.title}</p>
                    </Link>
                ))
            }
        </div>
      </section>
    </div>
  )
}

export default Category