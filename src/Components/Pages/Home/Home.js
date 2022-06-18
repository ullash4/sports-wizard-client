import React from "react";
import DynamicTitle from "../../SharedPages/DynamicTitle/DynamicTitle";
import InventoryItemsForHome from "../InventoryItemsForHome/InventoryItemsForHome";
import Banner from "./Banner/Banner";
import ProductDisplay from "./ProductDisplay/ProductDisplay";
import Section from "./Section/Section";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
    initial={{width : 0}}
    animate={{width: '100%'}}
    exit={{x: window.innerWidth, transition:{duration : 0.1}}}
    >
      <DynamicTitle name="Home" />
      <Banner></Banner>
      <InventoryItemsForHome></InventoryItemsForHome>

      <ProductDisplay></ProductDisplay>
      <Section></Section>
    </motion.div>
  );
};

export default Home;
