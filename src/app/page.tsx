/* eslint-disable react/no-unescaped-entities */
//to create a new page, create a new folder with what the page will be about
//then create a file in the folder, titled page.

//link is better than 'a' because 'a' gives a lot of things in the network
//however link only returns one thing

import Link from "next/link";
import { ProductCard } from "./components/ProductCard";
import NavBar from "./components/NavBar";

//<Link href="/users"><button className="bg-blue-500 hover:bg-blue-700 text-white font-extrabold py-2 px-4 rounded-full ">New User, Click here!</button></Link>
//<ProductCard />

export default function Home() {
  return (
    <main className="bg-amber-100">
      <NavBar />
      <div className="relative object-cover w-screen h-200">
      <video src={process.env.PUBLIC_URL + "../../assets/video/video1.mov"} loop autoPlay muted className="absolute inset-0 object-cover w-full h-full z-0"></video>
      <div className="absolute inset-0 flex flex-col items-center justify-center font-serif space-y-7 z-10">
        <span className='text-6xl text-white font-extrabold drop-shadow-xl'>
          Wade's world
        </span>
        <span className='text-4xl text-gray-400 font-bold drop-shadow-xl'>
          Personal Portfolio
        </span>
        <span>
          <input type="text" placeholder="Ask Me About Wade!" className="input input-bordered w-24 md:w-auto bg-white text-black font-extrabold" />
          <button className="btn ml-2.5 text-l">Go</button>
        </span>
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-end font-serif mb-20">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" className="size-15 text-white animate-bounce">
        <path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /> </svg>
      </div>
      </div>
    </main>
  );
}
