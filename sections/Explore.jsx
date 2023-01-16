"use client";
import { useState } from "react";
import { motion } from "framer-motion";

//internal imports
import styles from "../styles";
import { staggerContainer } from "../utils/motion";
import { TypingText, ExploreCard, TitleText } from "../components";
import { exploreWorlds } from "../constants";

const Explore = () => (
  <section className={`${styles.paddings}`} id="explore">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title={"| The World"} textStyles="text-center" />
      <TitleText
        title={
          <>
            Choose The World You Want <br className="md:block hidden" /> To
            Explore
          </>
        }
        textStyles="text-center"
      />
    </motion.div>
  </section>
);

export default Explore;
