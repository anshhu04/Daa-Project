import Image from "next/image";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Hero_section from "./Components/Hero_section/Hero_section";
import Body from "./Components/Body/Body";
import Services from "./Components/Services/Services";
import Doctors from "./Components/Doctors/Doctors";
import Facilities from "./Components/Facilities/Facilities";
import Appointment from "./Components/Appointment/Appointment";
import Footer from "./Components/Footer/Footer";

export default function Home() {
  return (
   <>
   <Hero_section/>
   <Body/>
   <Services/>
   <Doctors/>
   <Facilities/>
   <Appointment/>

   
    </>
  );
}
