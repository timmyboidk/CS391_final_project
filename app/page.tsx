import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Legend from "@/app/components/Legend";
import Table from "@/app/components/Table";

export default function Home() {
  return (
      // Main Page Components Here (zach / alex)
      <div className="flex w-3/4 m-auto flex-col align-items-center bg-green-100">
        <Header/>
          <p className="text-black text-2xl"> rest of components/content, search, table, etc</p>
          <Table/>
        <Legend/>
        <Footer/>
      </div>
  );
}
