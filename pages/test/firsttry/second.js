import Head from "next/head";
import Button from "../../../components/Navbar/Button";
import NavBar from "../../../components/Navbar/NavBar";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title></title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <section className="bg-Hero bg-cover h-[400vh] opacity-80"> */}
      <section className="bg-slate-200 h-[400vh] opacity-80">
        <NavBar />
        {/* <h1 className="flex flex-col space-y-4 justify-center items-center text-center h-full font-semibold text-2xl text-black">
          <p> Marios Landing Page</p>
          <p> Erfahrung und Empathie</p>
          <div className="text-xl">
            <Button />
          </div>
        </h1> */}
      </section>
    </div>
  );
}
