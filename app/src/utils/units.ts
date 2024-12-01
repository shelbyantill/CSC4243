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
    description: "The Basics of Programming",
    backgroundColor: "bg-[#CC5742]",
    textColor: "text-[#FFD668]",
    borderColor: "border-[#CC5742]",
    tiles: [
      {
        type: "star",
        description: "Assignment statements",
      },
      {
        type: "book",
        description: "Assignment statements",
      },
      {
        type: "star",
        description: "Arithimetic",
      },
      { type: "treasure" },
      { type: "book", description: "Arithimetic" },
      { type: "trophy", description: "Comparison Operators" },
    ],
  },
  {
    unitNumber: 2,
    description: "Intermediate Programming Concepts",
    backgroundColor: "bg-[#FFD668]",
    textColor: "text-[#CC5742]",
    borderColor: "border-[#FFD668]",
    tiles: [
      { type: "fast-forward", description: "Basic data structures" },
      { type: "dumbbell", description: "Basic data structures" },
      { type: "book", description: "Logic flow statements" },
      { type: "treasure" },
      { type: "star", description: "Loops" },
      { type: "book", description: "Loops" },
      { type: "star", description: "Functions" },
      { type: "book", description: "Functions and Review" },
      { type: "treasure" },
      { type: "dumbbell", description: "Review" },
      { type: "trophy", description: "Review" },
    ],
  },
  {
    unitNumber: 3,
    description: "Advanced Programming Concepts",
    backgroundColor: "bg-[#CC5742]",
    textColor: "text-[#FFD668]",
    borderColor: "border-[#CC5742]",
    tiles: [
      { type: "fast-forward", description: "Objects and Classes" },
      { type: "book", description: "Objects and Classes" },
      { type: "star", description: "Objects and Classes" },
      { type: "treasure" },
      { type: "book", description: "Inheritance" },
      { type: "star", description: "Inheritance" },
      { type: "treasure" },
      { type: "dumbbell", description: "Special Topics" },
      { type: "book", description: "Special Topics" },
      { type: "trophy", description: "Final Overview" },
    ],
  },
];
