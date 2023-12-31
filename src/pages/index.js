import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchFeaturedProductsRequest } from "../redux/actions/shopActions";
import { fetchPostsRequest } from "../redux/actions/blogActions";
import categories from "../data/categories.json";
import LayoutFour from "../components/layout/LayoutFour";
import Benefits from "../components/other/Benefits"
import Container from "../components/other/Container";
import HeroSliderFour from "../components/sections/hero-slider/HeroSliderFour";
import IntroductionThree from "../components/sections/introduction/IntroductionThree";
import IntroductionTwo from "../components/sections/introduction/IntroductionTwo";
import heroSliderData from "../data/sections/hero-slider.json";
import ProductTab from "../components/sections/product-thumb/ProductTab";
import IntroductionFour from "../components/sections/introduction/IntroductionFour";
import PartnerOne from "../components/sections/partners/PartnerOne";
import BlogSlide from "../components/sections/blog/BlogSlide";
import HeroSliderOne from "../components/sections/hero-slider/HeroSliderOne";
import heroslideOneData from "../data/sections/hero-slider.json";
import CategoriesOne from "../components/sections/categories/CategoriesOne";
import categoriesOneData from "../data/sections/categories.json";
import Cform from "../components/sections/introduction/cform";


export default function homepage4() {
  return (
    <LayoutFour
      title="Index"
      headerClass="-coffee -absolute -no-space"
      footerClass="-coffee"
      style={{ backgroundColor: '#f4f4f4' }}
    >
      <HeroSliderOne data={heroslideOneData.one} />
      <br />
      <IntroductionTwo id="about" />

      <IntroductionThree />
      <Container>
      <CategoriesOne data={categoriesOneData.one} />
      <CategoriesOne data={categoriesOneData.two} />
      </Container>
      <IntroductionFour />
      <Cform/>

    </LayoutFour>
  );
}
