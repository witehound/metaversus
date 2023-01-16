"use client";
import { motion } from "framer-motion";

//internal import
import { textContainer, textVariant2 } from "../utils/motion";

export const TypingText = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer}
    className={`font-normal text-[14px] text-secondary-white ${textStyles}`}
  >
    {Array.from(title).map((el, i) => (
      <motion.span variants={textVariant2} key={i}>
        {el === " " ? "\u00A0" : el}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({ title, textStyles }) => <h2>Title Text</h2>;
