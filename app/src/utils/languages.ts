export type Language = (typeof languages)[number];

const languages = [
  {
    name: "Python",
    nativeName: "العربية",
    viewBox: "0 2178 82 66",
    code: "py",
  },
  { name: "JavaScript", nativeName: "বাংলা", viewBox: "0 1914 82 66", code: "js" },
  { name: "Java", nativeName: "Čeština", viewBox: "0 1848 82 66", code: "java" },
  { name: "C#", nativeName: "Deutsch", viewBox: "0 198 82 66", code: "cs" },
  { name: "C", nativeName: "Ελληνικά", viewBox: "0 924 82 66", code: "c" },
  
] as const;

export default languages;
