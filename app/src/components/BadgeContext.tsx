import React, { createContext, useContext, useState, ReactNode } from "react";

interface Badge {
  id: string;
  title: string;
  description: string;
  imgSrc: string;
  isUnlocked: boolean;
  unlockCondition: () => boolean;
}

interface BadgeContextProps {
  badges: Badge[];
  unlockBadge: (id: string) => void;
  lessonsCompleted: number; // Track lessonsCompleted in context
  incrementLessonsCompleted: (count: number) => void;
  markFastForwardUsed: () => void; // Add this function to mark fast-forward usage
}

interface BadgeProviderProps {
  children: ReactNode;
}

const BadgeContext = createContext<BadgeContextProps | undefined>(undefined);

export const BadgeProvider: React.FC<BadgeProviderProps> = ({ children }) => {
  const [lessonsCompleted, setLessonsCompleted] = useState<number>(0);
  const [hasUsedFastForward, setHasUsedFastForward] = useState<boolean>(false); // Track fast-forward usage

  const [badges, setBadges] = useState<Badge[]>([
    {
      id: "beginner",
      title: "Coding Beginner",
      description: "You completed your first coding lesson!",
      imgSrc: "/icons/beginner.png",
      isUnlocked: false,
      unlockCondition: () => lessonsCompleted >= 1,
    },
    {
      id: "master-basics",
      title: "Master of the Basics",
      description: "You completed 1 unit! You're practically a pro!",
      imgSrc: "/icons/master.png",
      isUnlocked: false,
      unlockCondition: () => lessonsCompleted >= 4,
    },
    {
      id: "10-lessons",
      title: "10 is a big number",
      description: "You completed 10 lessons! That's a crazy amount!",
      imgSrc: "/icons/lessons_master.png",
      isUnlocked: false,
      unlockCondition: () => lessonsCompleted >= 10,
    },
    {
      id: "fast-forward",
      title: "You went into the future?!",
      description: "You skipped past a unit with the fast forward button!",
      imgSrc: "/icons/fast-forward.png",
      isUnlocked: false,
      unlockCondition: () => hasUsedFastForward, // Check if fast-forward was used
    },
  ]);

  const unlockBadge = (id: string) => {
    setBadges((prevBadges) =>
      prevBadges.map((badge) =>
        badge.id === id ? { ...badge, isUnlocked: true } : badge
      )
    );
  };

  const incrementLessonsCompleted = (count: number) => {
    setLessonsCompleted((prev) => prev + count);
  };

  const markFastForwardUsed = () => setHasUsedFastForward(true); // Set fast-forward usage

  // Update badges based on conditions
  React.useEffect(() => {
    setBadges((prevBadges) =>
      prevBadges.map((badge) => ({
        ...badge,
        isUnlocked: badge.unlockCondition(),
      }))
    );
  }, [lessonsCompleted, hasUsedFastForward]); // Re-run effect if either state changes

  return (
    <BadgeContext.Provider
      value={{
        badges,
        unlockBadge,
        lessonsCompleted,
        incrementLessonsCompleted,
        markFastForwardUsed, // Provide the function to mark fast-forward usage
      }}
    >
      {children}
    </BadgeContext.Provider>
  );
};

export const useBadgeContext = () => {
  const context = useContext(BadgeContext);
  if (!context) {
    throw new Error("useBadgeContext must be used within a BadgeProvider");
  }
  return context;
};
