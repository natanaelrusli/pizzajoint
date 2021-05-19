import React, {useEffect} from 'react';
import { motion } from 'framer-motion'

// Variants
const containerVariants = {
  hidden: {
    x: '100vw',
    opacity: 0,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      delay: 0.2,
      mass: 0.4,
      damping: 8,
      // Also could be afterChildren
      when: "beforeChildren",
      // There will be 0.4 seconds delay until the next children start animating
      staggerChildren: 0.4
    }
  },

  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" }
  }
}

const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  }
}

const Order = ({ pizza, setShowModal }) => {
  
  useEffect(() => {
    setTimeout(() => {
      setShowModal(true)
    }, 5000)
  },[setShowModal])

  return (
    <motion.div className="container order"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* AnimatePresence used for the exit animation */}
          <h2>
            Thank you for your order :)
          </h2>

        {/* The childVariants will inherits the initial and animate attributes from the parent */}
        <motion.p variants={childVariants}>You ordered a {pizza.base} pizza with:</motion.p>

      <motion.div variants={childVariants}>
        {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
      </motion.div>
    </motion.div>
  )
}

export default Order;