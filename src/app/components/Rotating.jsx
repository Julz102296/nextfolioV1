import { motion, useTransform } from "framer-motion";

const Rotating = ({ scrollYProgress, width, height }) => {
  const rotateForward1 = useTransform(scrollYProgress, [1, 0], [360, -360]);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <motion.svg
        style={{ rotate: rotateForward1, width: width, height: height, fill: "rgb(51 65 85)", }}
        
        animate={{ rotate: 360 }}
        transition={{ duration: Infinity, ease: "linear", repeat: Infinity }}
        viewBox="0 0 300 300"
        className="md:w-[600px] md:h-[600px]"
      >
        <defs>
          <path
            id="circlePath"
            d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
          />
        </defs>
        <text fill="#475569">
          <textPath xlinkHref="#circlePath" className="text-2xl font-semibold">
            M y    W o r k s
          </textPath>
        </text>
      </motion.svg>
    </div>
  );
};

export default Rotating;
