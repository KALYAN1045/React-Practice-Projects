import { useState } from "react";
import { motion } from "framer-motion";

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];

function CardContent({ Question, Answer }) {
  const [isFlip, setIsFlip] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleFlip() {
    if (!isAnimating) {
      setIsAnimating(true);
      setIsFlip(!isFlip);
    }
  }
  return (
    <div
      className="flip-card w-[450px] h-[200px] m-3 rounded-md "
      onClick={handleFlip}
    >
      <motion.div
        className="flip-card-inner w-[100%] h-[100%]"
        initial={false}
        animate={{ rotateY: isFlip ? 180 : 360 }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0, animationDirection: "normal" }}
        onAnimationComplete={() => setIsAnimating(false)}
      >
        <div className="btn flip-card-front w-[100%] h-[100%] border-[1px] text-white rounded-lg p-4 flex items-center shadow-lg bg-black">
          <p>{Question}</p>
        </div>

        <div className="btn flip-card-back w-[100%] h-[100%] border-[1px] text-white hover:text-black rounded-lg p-4 flex items-center justify-center shadow-lg bg- font-semibold bg-black">
          <p>{Answer}</p>
        </div>
      </motion.div>
    </div>
  );
}

export default function CardFlip() {
  return (
    <div>
      <div className="cursor-pointer flex flex-wrap p-5">
        {questions.map((item) => (
          <CardContent Question={item.question} Answer={item.answer} />
        ))}
      </div>
    </div>
  );
}
