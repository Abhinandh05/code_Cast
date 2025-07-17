import React from 'react'
import Header from "@/components/Header";
import VideoCard from "@/components/VideoCard";

const Page = () => {
  return (
    <main className='wrapper page'>
        <Header title='All videos ' subHeader='Public Libery' />
      <h1 className='text-xl font-karla '>Welcome to the page</h1>
        <VideoCard
            id='1'
            title='snapChatMessage -30 july'
            thumbnail='/assets/samples/thumbnail (1).png'
            createdAt='2025-07-17 06:25:54.437'
            userImg='/assets/images/jason.png'
            username='jason'
            views={10}
            visibility='public'
            duration={156}

        />

    </main>
  )
}

export default Page