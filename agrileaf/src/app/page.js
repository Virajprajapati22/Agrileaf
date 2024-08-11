"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import HomePageComponent from "@/components/homePageComponent";
import HomeMain2Section from "@/components/sections/homeMain2Section";
import HomeMainSection from "@/components/sections/homeMainSection";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    const checkAuth = () => {
      const storedUser = localStorage.getItem('agrileaf-userToken');
      if (!storedUser) {
        router.push('/signup');
      }
    };

    checkAuth();
  }, [router]);

  return (
    <>
      <HomePageComponent />
      <HomeMain2Section />
      <HomeMainSection />
    </>
  );
};

export default Home;
