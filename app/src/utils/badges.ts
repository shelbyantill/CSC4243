export const badges = [
    {
      id: "beginner",
      title: "Coding Beginner",
      description: "You completed your first coding lesson!",
      imgSrc: "/icons/beginner.png",
      unlockCondition: (state) => state.lessonsCompleted >= 1,
    },
    {
      id: "master-basics",
      title: "Master of the Basics",
      description: "You completed your first unit!",
      imgSrc: "/icons/master.png",
      unlockCondition: (state) => state.unitsCompleted >= 1,
    },
    {
      id: "10-lessons",
      title: "10 is a big number",
      description: "You completed 10 lessons! That's incredible!",
      imgSrc: "/icons/lessons_master.png",
      unlockCondition: (state) => state.lessonsCompleted >= 10,
    },
    {
      id: "fast-forward",
      title: "Time Traveler",
      description: "You used the fast-forward feature to skip ahead.",
      imgSrc: "/icons/fast-forward.png",
      unlockCondition: (state) => state.hasUsedFastForward,
    },
  ];
  