import React, { createContext, useContext, useState } from "react";

type ProgressState = {
  lessonsCompleted: number;
  unitsCompleted: number;
  hasUsedFastForward: boolean;
  incrementLessons: () => void;
  completeUnit: () => void;
  useFastForward: () => void;
};

const ProgressContext = createContext<ProgressState | undefined>(undefined);

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lessonsCompleted, setLessonsCompleted] = useState(0);
  const [unitsCompleted, setUnitsCompleted] = useState(0);
  const [hasUsedFastForward, setHasUsedFastForward] = useState(false);

  const incrementLessons = () => setLessonsCompleted((prev) => prev + 1);
  const completeUnit = () => setUnitsCompleted((prev) => prev + 1);
  const useFastForward = () => setHasUsedFastForward(true);

  React.useEffect(() => {
    // Increment unitsCompleted based on lessonsCompleted
    const lessonsPerUnit = 20;
    const calculatedUnits = Math.floor(lessonsCompleted / lessonsPerUnit);

    if (calculatedUnits > unitsCompleted) {
      setUnitsCompleted(calculatedUnits);
    }
  }, [lessonsCompleted, unitsCompleted]);

  return (
    <ProgressContext.Provider
      value={{
        lessonsCompleted,
        unitsCompleted,
        hasUsedFastForward,
        incrementLessons,
        completeUnit,
        useFastForward,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error("useProgress must be used within a ProgressProvider");
  }
  return context;
};
