import { LevelStub } from "./interfaces";
export default {
  seed: 4,
  text: "x",
  walls: [],
  bricks: [
    {
      content: "9",
      ox: 2,
      oy: 2,
      odragabble: true,
    },
    {
      content: "2",
      ox: 3,
      oy: 2,
      odragabble: true,
    },
    {
      content: "-",
      ox: 2,
      oy: 3,
      odragabble: true,
    },
    {
      content: "8",
      ox: 2,
      oy: 4,
      odragabble: true,
    },
    {
      content: "8",
      ox: 3,
      oy: 4,
      odragabble: true,
    },
    //2

    {
      content: "2",
      ox: 7,
      oy: 2,
      odragabble: true,
    },
    {
      content: "-",
      ox: 7,
      oy: 3,
      odragabble: true,
    },
    {
      content: "2",
      ox: 7,
      oy: 4,
      odragabble: true,
    },

    //3
    {
      content: "9",
      ox: 11,
      oy: 3,
      odragabble: true,
    },
    {
      content: "9",
      ox: 12,
      oy: 3,
      odragabble: true,
    },

    {
      content: "9",
      ox: 13,
      oy: 3,
      odragabble: true,
    },

    {
      content: "-",
      ox: 12,
      oy: 4,
      odragabble: true,
    },
    {
      content: "9",
      ox: 11,
      oy: 5,
      odragabble: true,
    },
    {
      content: "9",
      ox: 12,
      oy: 5,
      odragabble: true,
    },
    {
      content: "8",
      ox: 13,
      oy: 5,
      odragabble: true,
    },
    {
      content: "+",
      ox: 12,
      oy: 6,
      odragabble: true,
    },
    {
      content: "3",
      ox: 13,
      oy: 6,
      odragabble: true,
    },
  ].map((b) => {
    return { ...b, x: 0, y: 0 };
  }),
} as LevelStub;
