import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/NewsLetter";
import Products from "../components/Products";
import Slider from "../components/Slider";
import CuscomerFeedbackSlider from "../components/CuscomerFeedback";



const Home = () => {
  return (
    <div>
      <Announcement />
      {/* <Navbar /> */}
      <Slider />
      <Categories />
      <Products/>
      <CuscomerFeedbackSlider/>
      <Newsletter/>
      <Footer/>
    </div>
  );
};

export default Home;