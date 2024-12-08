import type { NextPage } from "next";
import type { ComponentProps } from "react";
import React from "react";

import { BottomBar } from "~/components/BottomBar";
import { LeftBar } from "~/components/LeftBar";
import { RightBar } from "~/components/RightBar";
import { TopBar } from "~/components/TopBar";

const Badges: NextPage = () => {
  const badges = [
    {
      title: "Coding Beginner",
      description: "You completed your first coding lesson!",
      imgSrc: "/icons/.png",
      isUnlocked: true,
    },
    {
      title: "Master of the Python Basics",
      description: "You completed the first unit of Python! You're practically a pro!",
      imgSrc: "/icons/.png",
      isUnlocked: false,
    },
    {
      title: "",
      description: "",
      imgSrc: "/icons/.png",
      isUnlocked: false,
    },
  ];

  return (
    <div>
      <TopBar />
      <LeftBar selectedTab="Badges" />
      <div className="flex justify-center gap-3 pt-14 sm:p-6 sm:pt-10 md:ml-24 lg:ml-64 lg:gap-12">
        <div className="px-4 pb-20">
          <div className="py-7">
            <h2 className="mb-5 text-2xl font-bold">Badges</h2>
            {badges.map((badge, index) => (
              <div
                key={index}
                className="flex border-t-2 border-gray-300 py-5"
              >
                <img
                  src={badge.imgSrc}
                  alt={badge.title}
                  className="shrink-0 w-16 h-16"
                />
                <section className="flex flex-col gap-3">
                  <h3 className="text-lg font-bold">{badge.title}</h3>
                  <p className="text-sm text-gray-500">{badge.description}</p>
                  {badge.isUnlocked ? (
                    <div className="w-fit rounded-full bg-green-200 px-3 py-1 text-sm font-bold uppercase text-green-600">
                      Unlocked
                    </div>
                  ) : (
                    <button
                      className="flex w-fit items-center gap-1 rounded-2xl border-2 border-gray-300 bg-white px-4 py-2 text-sm font-bold uppercase text-gray-300"
                      disabled
                    >
                      Locked
                    </button>
                  )}
                </section>
              </div>
            ))}
          </div>
        </div>
        <RightBar />
      </div>
      <BottomBar selectedTab="Badges" />
    </div>
  );
};

export default Badges;