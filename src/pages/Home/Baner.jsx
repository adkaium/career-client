import React from "react";
import team1 from "../../assets/team1.jpg";
import team2 from "../../assets/team2.jpg";
import { motion } from "motion/react";

const Baner = () => {
  return (
    <div className="hero bg-base-200 min-h-96">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
          <motion.img
            src={team1}
            animate={{y: [100, 150, 100]}}
            transition={{duration: 5, repeat: Infinity}}
            className="max-w-sm border-primary border-s-8 border-b-8 rounded-t-4xl rounded-br-4xl"
          />
          <motion.img
            src={team2}
            animate={{x: [100, 150, 100]}}
            transition={{duration: 5, delay: 3, repeat: Infinity}}
            className="max-w-sm border-primary border-s-8 border-b-8 rounded-t-4xl rounded-br-4xl"
          />
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
            >JOB
            </motion.span> FOR YOU!
          </motion.h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Baner;
