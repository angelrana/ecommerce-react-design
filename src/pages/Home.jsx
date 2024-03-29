import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Slider from "../components/Slider";
import Products from "../components/Products";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { AnnouncementRounded } from "@mui/icons-material";
const Home = () => {
  return (
    <div>
      <Announcement/>
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
