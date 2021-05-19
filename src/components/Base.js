import React from 'react';
import { Link } from 'react-router-dom';
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
      delay: 0.5,
    }
  },

  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" }
  }
}

const nextVariants = {
  hidden: {
    x: '-100vw',
  },

  visible: {
    x: 0,
    transition: {
      type: 'tween', 
      stiffness: 120,
    }
  }
}

const buttonVariants = {
  // visible: {
  //   transition: { delay: 1 },
  //   x: [0, -20, 20, -20, 20, 0],
  // },
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255, 255, 255)",
    boxShadow: "0px 0px 8px rgb(255, 255, 255)",
    transition: {
      yoyo: Infinity
    }
  }
}

const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  return (
    <motion.div className="base container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >

      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <motion.li key={base} onClick={() => addBase(base)}
              whileHover={{ 
                scale: 1.3,
                color: '#f8e112',
                originX: 0,
              }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <motion.span 
                className={spanClass}
              >
                { base }
              </motion.span>
            </motion.li>
          )
        })}
      </ul>

      {pizza.base && (
        <motion.div className="next"
          variants={nextVariants}
        >
          <Link to="/toppings">
            {/* The childVariants will inherits the initial and animate attributes from the parent */}
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
            >
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}

    </motion.div>
  )
}

export default Base;