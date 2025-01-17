import type { NextPage } from "next";
import React, { useState } from "react";
import { BottomBar } from "~/components/BottomBar";
import { LeftBar } from "~/components/LeftBar";
import { TopBar } from "~/components/TopBar";
import { SettingsRightNav } from "~/components/SettingsRightNav";
import { useBoundStore } from "~/hooks/useBoundStore";
import { useSound } from "~/hooks/useSound";

const Sound: NextPage = () => {
  const soundEffects = useBoundStore((x) => x.soundEffects);
  const setSoundEffects = useBoundStore((x) => x.setSoundEffects);
  const [localSoundEffects, setLocalSoundEffects] = useState(soundEffects);

  const playSound = useSound(localSoundEffects);

  const soundOptions = [
    {
      title: "Sound effects",
      value: localSoundEffects,
      setValue: setLocalSoundEffects,
    }
  ];

  return (
    <div>
      <TopBar />
      <LeftBar selectedTab={null} />
      <BottomBar selectedTab={null} />
      <div className="mx-auto flex flex-col gap-5 px-4 py-20 sm:py-10 md:pl-28 lg:pl-72">
        <div className="mx-auto flex w-full max-w-xl items-center justify-between lg:max-w-4xl">
          <h1 className="text-lg font-bold text-gray-800 sm:text-2xl">Sound</h1>
          <button
            className="rounded-2xl border-b-4 border-green-600 bg-green-500 px-5 py-3 font-bold uppercase text-white transition hover:brightness-110 disabled:border-b-0 disabled:bg-gray-200 disabled:text-gray-400 disabled:hover:brightness-100"
            onClick={() => {
              setSoundEffects(localSoundEffects);
              playSound("/sounds/click.mp3");
            }}
            disabled={
              localSoundEffects === soundEffects
            }
          >
            Save changes
          </button>
        </div>
        <div className="flex justify-center gap-12">
          <div className="flex w-full max-w-xl flex-col gap-8">
            {soundOptions.map(({ title, value, setValue }) => {
              return (
                <div
                  key={title}
                  className="flex justify-between sm:justify-center sm:gap-10 sm:pl-10"
                >
                  <div className="font-bold sm:w-1/2">{title}</div>
                  <label className="pr-5 sm:w-1/2 sm:pr-0">
                    <div
                      className={[
                        "relative h-6 w-12 cursor-pointer rounded-full transition-all duration-300",
                        value ? "bg-blue-400" : "bg-gray-200",
                      ].join(" ")}
                    >
                      <div
                        className={[
                          "absolute h-10 w-10 rounded-xl border-2 border-b-4 bg-white transition-all duration-300",
                          value ? "border-blue-400" : "border-gray-200",
                        ].join(" ")}
                        style={{
                          top: "calc(50% - 20px)",
                          left: value ? "calc(100% - 20px)" : "-20px",
                        }}
                      ></div>
                    </div>
                    <input
                      className="hidden"
                      type="checkbox"
                      checked={value}
                      onChange={() => setValue((x) => !x)}
                    />
                  </label>
                </div>
              );
            })}
          </div>
          <SettingsRightNav selectedTab="Sound" />
        </div>
      </div>
    </div>
  );
};

export default Sound;
