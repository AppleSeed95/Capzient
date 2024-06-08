"use client";
import { AnimatePresence } from "framer-motion";
import React from "react";

export const Providers = ({ children }) => {
  return <AnimatePresence>{children}</AnimatePresence>;
};