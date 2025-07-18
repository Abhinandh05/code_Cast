'use client';
import React from 'react'
import Link from "next/link";
import Image from "next/image";
import {authClient} from "@/lib/auth-client";

const Page = () =>  {
    const handleSignIn = async() =>{

        return await authClient.signIn.social({provider: 'google'})

    }
    return (
        <main className='sign-in'>
            <aside className='testimonial'>
                <Link href='/'>
                    <Image src='/assets/icons/logo.svg' alt='logo' width={32} height={32} />
                    <h1> CODE <span className="text-2xl text-pink-500">CAST</span></h1>
                </Link>
                <div className='description'>
                  <section>
                      <figure>
                          {Array.from({ length:5}).map((_, index) => (
                              <Image src='assets/icons/star.svg' alt='star' width={20} height={20}  key={index} />

                          ))}
                      </figure>
                      <p>CodeCast make screen recording easy. From quick walkthroughes to full presentation, it's fast smooth and shareable in second  </p>

                      <article>
                          <Image src='/assets/images/jason.jpg' alt='Abhi' width={64} height={64} className='rounded-full aspect-square' />
                          <div>
                              <h2>Abhinandh</h2>
                              <p><span className='text-purple-700'>J'S</span>Developer</p>
                          </div>

                      </article>
                  </section>
                </div>
                <p>© CODE <span className="text-pink-500">CAST</span> {(new Date()).getFullYear()}</p>
            </aside>
            <aside className='google-sign-in'>
                <section>
                    <Link href='/'>
                        <Image src='/assets/icons/logo.svg' alt='logo' width={45} height={45} />
                        <h1> CODE <span className="text-3]2xl text-pink-500">CAST</span></h1>


                    </Link>
                    <p>Create and share your very first <strong>CODE <span className="text-3]2xl text-pink-500">CAST</span> Video</strong> in no time! </p>
                    <button onClick={handleSignIn}>
                        <Image src='/assets/icons/google.svg' alt='google' width={22} height={22} />
                        <span>Sign in with google</span>
                    </button>
                </section>

            </aside>
            <div className='overlay' />
        </main>
    )
}
export default Page
