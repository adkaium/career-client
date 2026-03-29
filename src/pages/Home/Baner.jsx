import React from "react";
import searchLottie from "../../assets/lottifile/job hr.json"
import {motion} from "motion/react";
import { useLottie } from "lottie-react";

const Baner = () => {
  const options = {
    animationData: searchLottie,
    loop: true,
  };
         const {View} = useLottie(options);
  return (
    <div className="hero relative bg-base-100 min-h-96 z-1">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
          <motion.span
            animate={{y: [100, 150, 100]}}
            transition={{duration: 5, repeat: Infinity}}
            className="max-w-sm border-primary border-s-8 border-b-8 rounded-t-4xl rounded-br-4xl"
          >
            {View}
          </motion.span>
          {/* <motion.img
            src={team2}
            animate={{x: [100, 150, 100]}}
            transition={{duration: 5, delay: 3, repeat: Infinity}}
            className="max-w-sm border-primary border-s-8 border-b-8 rounded-t-4xl rounded-br-4xl"
          /> */}
        </div>
        <div className="flex-1">
          <motion.h1
            initial={0}
            animate={{initial: 1}}
            className="text-5xl font-bold"
          >
            REMOT{" "}
            <motion.span
              animate={{
                color: [
                  "#eb6734",
                  "#eb3434",
                  "#eb6734",
                  "#eb3434",
                  "#eb6734",
                  "#eb3434",
                  "#eb6734",
                  "#ebd234",
                  "#d8eb34",
                  "#4feb34",
                ],
              }}
              transition={{duration: 2, repeat: Infinity}}
            >
              JOB
            </motion.span>{" "}
            FOR YOU!
          </motion.h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
          <input
            type="text"
            placeholder="Search jobs..."
            className="input input-l"
          />
        </div>
      </div>
      <div
        className=" bottom-0 left-0 w-full h-full bg-zinc-300 absolute opacity-50 -z-10 shadow-2xl"
        style={{
          clipPath: "polygon(0% 0%, 100% 0%, 100% 85%, 0% 100%)",
        }}
      ></div>
    </div>
  );
};

export default Baner;
