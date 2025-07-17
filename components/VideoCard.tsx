import React from 'react'
import Link from "next/link";
import Image from "next/image";

const VideoCard = ({id, title, thumbnail, userImg, username, createdAt, views, visibility, duration} : VideoCardProps) => {
    return (
        <Link href={`/video/${id}`} className='video-card' >
            <Image src={thumbnail} alt='thumbnail' width={290} height={160} className='thumbnail' />
            <article>
                <div>
                    <figure>
                        <Image src={userImg} alt='userImg' width={34} height={34} className='rounded-full aspect-square' />
                        <figcaption>
                            <h3>{username}</h3>
                            <p>{visibility}</p>
                        </figcaption>
                    </figure>
                </div>
            </article>
        </Link>

    )
}
export default VideoCard
