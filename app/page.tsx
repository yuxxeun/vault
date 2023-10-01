"use client"
import { Fragment } from "react";
import { Suspense } from "react";
import { Footer } from "@/components/widgets/Footer";
import React, { FC } from 'react';
import { Hero } from "@/components/widgets/Hero";
import { Client } from "@/components/widgets/Client";

const Home = () => {
  return (
    <>
    <Fragment>
      <Suspense>
        <Hero/>
        <Client/>
        <Footer />
      </Suspense>
    </Fragment>
    </>
  );
}

export default Home
