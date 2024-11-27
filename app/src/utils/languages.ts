export type Language = (typeof languages)[number];

const languages = [
  {
    name: "Python",
    nativeName: "python",
    viewBox: "0 2178 82 66",
    code: "py",
  },
  { name: "JavaScript", nativeName: "js", viewBox: "0 1914 82 66", code: "js" },
  
  { name: "C#", nativeName: "cs", viewBox: "0 198 82 66", code: "cs" },
 
  
] as const;

export default languages;
