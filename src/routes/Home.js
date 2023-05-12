import React from "react";
import Navbar from "../components/Navbar";
import Heroimg from "../components/Heroimg";
import Work from "../components/Work"
import Footer from "../components/Footer";


export default function Home() {
  return (
    <div>
      <Navbar />
      <Heroimg />
      <Work />
      <Footer/>
    </div>
  );
}
