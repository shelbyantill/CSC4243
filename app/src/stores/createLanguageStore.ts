import languages, { type Language } from "~/utils/languages";
import type { BoundStateCreator } from "~/hooks/useBoundStore";

export type LanguageSlice = {
  language: Language;
  setLanguage: (newLanguage: Language) => void;
};

const languageIndex = 6;

export const createLanguageSlice: BoundStateCreator<LanguageSlice> = (set) => ({
  language: languages[languageIndex],
  setLanguage: (newLanguage: Language) => set({ language: newLanguage }),
});
