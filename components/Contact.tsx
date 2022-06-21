import { Box, Center, Text } from "@chakra-ui/layout";
import { useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import { MotionCenter, MotionHeading } from "./MotionComponents";

const container = {
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const child = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  show: {
    opacity: 1,
    x: 0,
  },
};

const Contact = () => {
  const [ref, inView] = useInView({ threshold: 0.6, triggerOnce: true });
  const controls = useAnimation();

  useEffect(() => {
    inView ? controls.start("show") : controls.start("hidden");
  }, [controls, inView]);

  return (
    <Box
      as="section"
      aria-label="contact"
      id="contact"
      h="100vh"
      w="100%"
      pt={["3em", "3.5em", "3.5em"]}
      ref={ref}
    >
      <MotionCenter
        w="90%"
        h={["88%", "85%", "85%"]}
        margin="0 auto"
        maxW="1200px"
        flexDir="column"
        justifyContent="flex-start"
        initial="hidden"
        animate={controls}
        variants={container}
      >
        <MotionHeading
          variants={child}
          as="h1"
          fontFamily="Nunito"
          fontSize={["2xl", "4xl", "4xl"]}
        >
          Contact
        </MotionHeading>
        <Center w="100%" h="100%" flexDir="column">
          <ContactForm />
        </Center>
      </MotionCenter>
      <Footer />
    </Box>
  );
};

export default Contact;
