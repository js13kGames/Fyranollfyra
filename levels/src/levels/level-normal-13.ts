import { LevelStub } from "./interfaces";
export default {
  seed: 3,
  text: "n2",
  walls: [{ x: 7, y: -1, w: 10, h: 10 }],
  bricks: [
    {
      content: "0",
      ox: 2,
      oy: 0,
      odragabble: true,
    },
    {
      content: "0",
      ox: 2,
      oy: 1,
      odragabble: true,
    },
    {
      content: "1",
      ox: 2,
      oy: 2,
      odragabble: true,
    },
    {
      content: "+",
      ox: 2,
      oy: 5,
      odragabble: true,
    },
    {
      content: "3",
      ox: 2,
      oy: 6,
      odragabble: true,
    },
    // 2
    {
      content: "0",
      ox: 7,
      oy: 3,
      odragabble: true,
    },
    // 3
    {
      content: "4",
      ox: 11,
      oy: 3,
      odragabble: true,
    },
    {
      content: "2",
      ox: 12,
      oy: 3,
      odragabble: true,
    },
    {
      content: "-",
      ox: 10,
      oy: 4,
      odragabble: true,
    },
    {
      content: "4",
      ox: 11,
      oy: 4,
      odragabble: true,
    },
    {
      content: "3",
      ox: 12,
      oy: 4,
      odragabble: true,
    },
    {
      content: "+",
      ox: 10,
      oy: 5,
      odragabble: true,
    },
    {
      content: "5",
      ox: 12,
      oy: 5,
      odragabble: true,
    },
  ].map((b) => {
    return { ...b, x: 0, y: 0 };
  }),
} as LevelStub;
