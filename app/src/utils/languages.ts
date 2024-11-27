export type Language = (typeof languages)[number];

const languages = [
  {
    name: "Python",
    nativeName: "python",
    viewBox: "0 2178 82 66",
    code: "py",
  },
  { name: "JavaScript", nativeName: "js", viewBox: "0 1914 82 66", code: "js" },
  { name: "Java", nativeName: "java", viewBox: "0 1848 82 66", code: "java" },
  { name: "C#", nativeName: "cs", viewBox: "0 198 82 66", code: "cs" },
  { name: "C", nativeName: "c", viewBox: "0 924 82 66", code: "c" },
  
] as const;

export default languages;
