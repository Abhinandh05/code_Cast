import React from 'react'
import Header from "@/components/Header";
import VideoCard from "@/components/VideoCard";
import {dummyCards} from "@/constants";

const Page = () => {
  return (
    <main className='wrapper page'>
        <Header title='All videos ' subHeader='Public Libery' />

           <section className='video-grid'>
               {dummyCards.map((card) => (
                   <VideoCard key={card.id} {...card} />
               ))}
           </section>



    </main>
  )
}

export default Page