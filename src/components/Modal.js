import React from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import '../index.css'

const backDropVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
}

const modalVariants = {
    hidden: { 
        y: "-100vh",
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            delay: 0.5,
        }
    },
}

function Modal({ showModal, setShowModal }) {
    return (
        <AnimatePresence exitBeforeEnter>
            {showModal && (
                <motion.div className="backdrop"
                    variants={backDropVariants}
                    animate="visible"
                    initial="hidden"
                    exit="hidden"
                >
                    <motion.div className="modal"
                        variants={modalVariants}
                    >
                        <p>Want to make another order?</p>
                        <Link to="/">
                            <button>Order Again</button>
                        </Link>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Modal
