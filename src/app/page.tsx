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
      <div>
      <video src={process.env.PUBLIC_URL + "../../assets/video/video1.mov"} loop autoPlay muted className="object-cover w-screen h-200"></video>
      </div>
    </main>
  );
}
