/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { motion, AnimatePresence } from "framer-motion"

//components
import HeaderPrev from "./header-prev"
import "./layout.css"

const duration = 1

const variants = {
  initial: {
    opacity: 1,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: duration,
      delay: duration,
      when: 'beforeChildren',
    },
  },
  exit: {
    opacity: 1,
    transition: { duration: duration },
  },
}


const LayoutChild = ({ children }) => {
  return (
    <>
    <HeaderPrev />
    <AnimatePresence>
        <motion.main
          key={window.location.pathname}
          variants={variants}
          initial="initial"
          animate="enter"
          exit="exit"
        >
      {children}
      </motion.main>
    </AnimatePresence>
    </>
  )
}

export default LayoutChild
