import Head from "next/head";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title></title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="bg-Hero bg-cover h-screen opacity-80">
        <NavBar />
        <h1 className="flex flex-col space-y-4 justify-center items-center text-center h-screen font-semibold text-2xl   text-black">
          <p> Marios Landing Page</p>
          <p> Erfahrung und Empathie</p>
        </h1>
      </section>
    </div>
  );
}
