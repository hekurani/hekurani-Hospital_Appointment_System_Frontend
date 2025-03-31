"use client";
import { useEffect, useState } from "react";

const WelcomeMessage = () => {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      setGreeting("Good Morning");
    } else if (currentHour < 18) {
      setGreeting("Good Afternoon");
    } else {
      setGreeting("Good Evening");
    }
  }, []);

  return (
    <div className="w-full text-center mt-6">
      <h1 className="text-2xl font-bold text-gray-800">
        {greeting}, Welcome to the Hospital Dashboard!
      </h1>
      <p className="text-gray-600 mt-1">
        Here is an overview of hospital activities.
      </p>
    </div>
  );
};

export default WelcomeMessage;
