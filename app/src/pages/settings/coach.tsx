import type { NextPage } from "next";
import type { ComponentProps } from "react";
import React, { useState } from "react";
import { BottomBar } from "~/components/BottomBar";
import { LeftBar } from "~/components/LeftBar";
import { TopBar } from "~/components/TopBar";
import { useBoundStore } from "~/hooks/useBoundStore";
import { SettingsRightNav } from "~/components/SettingsRightNav";

const CoachSvg = (props: ComponentProps<"img">) => {
  return (
    <img
      src="/icons/chickcoach.png"
      alt="Coach Icon"
      width={124} // Adjust width and height as necessary
      height={124}
      {...props}
    />
  );
};

const goalXpOptions = [
  { title: "Basic", xp: 1 },
  { title: "Casual", xp: 10 },
  { title: "Regular", xp: 20 },
  { title: "Serious", xp: 30 },
  { title: "Intense", xp: 50 },
] as const;

const Coach: NextPage = () => {
  const goalXp = useBoundStore((x) => x.goalXp);
  const setGoalXp = useBoundStore((x) => x.setGoalXp);

  const [localGoalXp, setLocalGoalXp] = useState(goalXp);
  return (
    <div>
      <TopBar />
      <LeftBar selectedTab={null} />
      <BottomBar selectedTab={null} />
      <div className="mx-auto flex flex-col gap-5 px-4 py-20 sm:py-10 md:pl-28 lg:pl-72">
        <div className="mx-auto flex w-full max-w-xl items-center justify-between lg:max-w-4xl">
          <h1 className="text-lg font-bold text-gray-800 sm:text-2xl">
            Edit Daily Goal
          </h1>
          <button
            className="rounded-2xl border-b-4 border-green-600 bg-green-500 px-5 py-3 font-bold uppercase text-white transition hover:brightness-110 disabled:border-b-0 disabled:bg-gray-200 disabled:text-gray-400 disabled:hover:brightness-100"
            onClick={() => setGoalXp(localGoalXp)}
            disabled={localGoalXp === goalXp}
          >
            Save changes
          </button>
        </div>
        <div className="flex justify-center gap-12">
          <div className="flex w-full max-w-xl flex-col gap-8">
            <p className="text-gray-400">
              Coach here! Selecting a daily goal will help you stay motivated
              while learning a language. You can change your goal at any time.
            </p>
            <div className="flex gap-5">
              <CoachSvg className="hidden h-52 w-52 sm:block" />
              <div className="grow">
                {goalXpOptions.map(({ title, xp }, i) => {
                  return (
                    <button
                      key={title}
                      className={[
                        "flex w-full items-center justify-between border-2 p-4 first:rounded-t-2xl last:rounded-b-2xl last:border-b-2",
                        xp === localGoalXp
                          ? "border-b-2 border-blue-400 bg-blue-100 text-blue-500"
                          : "border-t-0 border-gray-200 first:border-t-2 hover:bg-gray-100",
                        goalXpOptions[i + 1]?.xp === localGoalXp
                          ? "border-b-0"
                          : "",
                      ].join(" ")}
                      onClick={() => setLocalGoalXp(xp)}
                    >
                      <div className="font-bold">{title}</div>
                      <div>{xp} XP per day</div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
          <SettingsRightNav selectedTab="Edit Daily Goal" />
        </div>
      </div>
    </div>
  );
};

export default Coach;
