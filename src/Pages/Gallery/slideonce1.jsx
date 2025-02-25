import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export default function Glimpse() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,  
    threshold: 0.1,     
  });

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);

  return (
    <div ref={ref}>
      <motion.h1
        initial={{ opacity: 0, translateX: "0%" }}
        animate={hasAnimated ? { opacity: 1, translateX: "0%"} : {}}
        transition={{ duration: 2 }}
        className="text-[32px]  sm:text-[40px] lg:text-[40px] w-fit font-ethenocentric font-normal bg-gradient-to-b from-[#ffffff] to-[#9BDAEB] bg-clip-text text-transparent main-heading meet-heading mx-auto text-center translate-y-[-30%] sm:translate-y-[-70%] lg:translate-y-[-90%] py-0  "
        id="font"
      >
        Highlights
      </motion.h1>
      
    </div>
  );
}
