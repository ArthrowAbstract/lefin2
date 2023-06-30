import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchFeaturedProductsRequest } from "../../redux/actions/shopActions";
import { fetchPostsRequest } from "../../redux/actions/blogActions";
import categories from "../../data/categories.json";
import LayoutFour from "../../components/layout/LayoutFour";
import Benefits from "../../components/other/Benefits";
import Container from "../../components/other/Container";
import HeroSliderFour from "../../components/sections/hero-slider/HeroSliderFour";
import IntroductionThree from "../../components/sections/introduction/IntroductionThree";
import IntroductionTwo from "../../components/sections/introduction/IntroductionTwo";
import heroSliderData from "../../data/sections/hero-slider.json";
import ProductTab from "../../components/sections/product-thumb/ProductTab";
import IntroductionFour from "../../components/sections/introduction/IntroductionFour";
import PartnerOne from "../../components/sections/partners/PartnerOne";
import BlogSlide from "../../components/sections/blog/BlogSlide";
import HeroSliderOne from "../../components/sections/hero-slider/HeroSliderOne";
import heroslideOneData from "../../data/sections/hero-slider.json";
import CategoriesOne from "../../components/sections/categories/CategoriesOne";
import categoriesOneData from "../../data/sections/categories.json";

export default function homepage4() {
  const dispatch = useDispatch();
  const [currentProductTabsCategory, setCurrentProductTabsCategory] = useState({
    featuredProducts: "",
  });
  const shopState = useSelector((state) => state.shopReducer);
  const blogState = useSelector((state) => state.blogReducer);
  const { featuredProducts } = shopState;
  const { allPosts } = blogState;
  useEffect(() => {
    dispatch(fetchFeaturedProductsRequest({ limit: 8 }));
    dispatch(fetchPostsRequest({ limit: 4 }));
  }, []);
  useEffect(() => {
    dispatch(
      fetchFeaturedProductsRequest({
        limit: 8,
        category: currentProductTabsCategory.featuredProducts,
      })
    );
  }, [currentProductTabsCategory.featuredProducts]);
  return (
    <LayoutFour
      title="Index"
      headerClass="-coffee -absolute -no-space"
      footerClass="-coffee"
    >
      <HeroSliderOne data={heroslideOneData.one} />
      <br />
      <IntroductionTwo id="about" />
      <IntroductionThree />
      <Container>
      <CategoriesOne data={categoriesOneData.one} />
      </Container>
      <IntroductionFour />
    </LayoutFour>
  );
}
