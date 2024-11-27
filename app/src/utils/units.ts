export type Unit = {
  unitNumber: number;
  description: string;
  backgroundColor: `bg-${string}`;
  textColor: `text-${string}`;
  borderColor: `border-${string}`;
  tiles: Tile[];
};

export type Tile =
  | {
      type: "star" | "dumbbell" | "book" | "trophy" | "fast-forward";
      description: string;
    }
  | { type: "treasure" };

export type TileType = Tile["type"];

export const units: readonly Unit[] = [
  {
    unitNumber: 1,
    description: "The basics of programming",
    backgroundColor: "bg-[#CC5742]",
    textColor: "text-[#FFD668]",
    borderColor: "border-[#CC5742]",
    tiles: [
      {
        type: "star",
        description: "Learn about variables, print statements, and comments",
      },
      {
        type: "book",
        description: "Learn about assignments, booleans, and operators",
      },
      {
        type: "star",
        description: "Learn number operations, comparison operators, and type casting",
      },
      { type: "treasure" },
      { type: "book", description: "Learn about lists, tuples, and dictoionaries" },
      { type: "trophy", description: "Learn about functions and lamdas" },
    ],
  },
  {
    unitNumber: 2,
    description: "Intermediate programming concepts",
    backgroundColor: "bg-[#FFD668]",
    textColor: "text-[#CC5742]",
    borderColor: "border-[#FFD668]",
    tiles: [
      { type: "fast-forward", description: "Perform advanced operations on lists, tuples, and dictionaries" },
      { type: "dumbbell", description: "Perform advanced operations on lists, tuples, and dictionaries" },
      { type: "book", description: "One thing" },
      { type: "treasure" },
      { type: "star", description: "Get around in a city" },
      { type: "book", description: "A very big family" },
      { type: "star", description: "Greet people" },
      { type: "book", description: "The red jacket" },
      { type: "treasure" },
      { type: "dumbbell", description: "Personalized practice" },
      { type: "trophy", description: "Unit 2 review" },
    ],
  },
  {
    unitNumber: 3,
    description: "Order food and drink",
    backgroundColor: "bg-[#CC5742]",
    textColor: "text-[#FFD668]",
    borderColor: "border-[#CC5742]",
    tiles: [
      { type: "fast-forward", description: "Order food and drink" },
      { type: "book", description: "The passport" },
      { type: "star", description: "Order food and drinks" },
      { type: "treasure" },
      { type: "book", description: "The honeymoon" },
      { type: "star", description: "Get around in a city" },
      { type: "treasure" },
      { type: "dumbbell", description: "Personalized practice" },
      { type: "book", description: "Doctor Eddy" },
      { type: "trophy", description: "Unit 2 review" },
    ],
  },
];
