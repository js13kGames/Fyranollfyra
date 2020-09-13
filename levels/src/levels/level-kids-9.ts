import { LevelStub } from "./interfaces";
export default {
  seed: 4,
  text: "kid8",
  walls: [],
  bricks: [
    {
      content: "2",
      ox: 2,
      oy: 2,
      odragabble: true,
    },
    {
      content: "+",
      ox: 2,
      oy: 3,
      odragabble: false,
    },
    {
      content: "2",
      ox: 2,
      oy: 4,
      odragabble: true,
    },
    //2

    {
      content: "7",
      ox: 7,
      oy: 2,
      odragabble: true,
    },
    {
      content: "-",
      ox: 7,
      oy: 3,
      odragabble: false,
    },
    {
      content: "7",
      ox: 7,
      oy: 4,
      odragabble: true,
    },

    //3
    {
      content: "2",
      ox: 12,
      oy: 2,
      odragabble: true,
    },
    {
      content: "+",
      ox: 12,
      oy: 3,
      odragabble: false,
    },
    {
      content: "2",
      ox: 12,
      oy: 4,
      odragabble: true,
    },
  ].map((b) => {
    return { ...b, x: 0, y: 0 };
  }),
} as LevelStub;
