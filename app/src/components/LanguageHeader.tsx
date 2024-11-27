import Link from "next/link";
import { LanguageDropDown } from "./LanguageDropDown";

export const LanguageHeader = () => {
  return (
    <header className="fixed left-0 right-0 top-0 mx-auto flex min-h-[70px] max-w-5xl items-center justify-between bg-[#CC5742] px-10 font-bold text-white">
      <Link className="text-4xl" href="/">
        Coding App
      </Link>
      {/* <LanguageDropDown /> */}
    </header>
  );
};
