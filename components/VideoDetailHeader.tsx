'use client'
import React, {useState} from 'react'
import {useRouter} from "next/navigation";
import {daysAgo} from "@/lib/utils";
import Image from "next/image";

const VideoDetailHeader = ({title, createdAt,userImg, username, videoId, ownerId, visibility, thumbnailUrl} :VideoDetailHeaderProps) => {
    const router = useRouter();
    const [copied, setCopied] = useState(false)
    const handleCopyLink = () =>{
        navigator.clipboard.writeText(`${window.location.origin}/video/${videoId}`);

        setCopied(true);
    }


    return (
        <header className='detail-header'>

            <aside className='user-info'>
                <h1>{title}</h1>
                <figure>
                    <button onClick={() => router.push(`/profile/${ownerId}`) }>
                        <img src={userImg || ''} alt='userImage' width={24} height={24} className='rounded-full' />
                        <h2>{username ?? "Guest"}</h2>
                    </button>
                    <figcaption>
                        <span className='mt-1'>.</span>
                        <p>{daysAgo(createdAt)}</p>
                    </figcaption>
                </figure>

            </aside>
            <aside className='cta'>
                <button onClick={handleCopyLink}>
                    <Image src={ copied ?"/assets/images/checked.png":'/assets/icons/link.svg'} alt='link image' width={24} height={24} />
                </button>
            </aside>

        </header>
    )
}
export default VideoDetailHeader
