import { LevelStub } from "./interfaces";
export default {
  seed: 4,
  text: "kid8",
  walls: [{ x: -1, y: 4, w: 16, h: 6 }],
  bricks: [
    {
      content: "2",
      ox: 1,
      oy: 2,
      odragabble: true,
    },
    {
      content: "2",
      ox: 2,
      oy: 3,
      odragabble: true,
    },
    {
      content: "2",
      ox: 3,
      oy: 3,
      odragabble: true,
    },
    {
      content: "-",
      ox: 2,
      oy: 4,
      odragabble: true,
    },
    {
      content: "2",
      ox: 1,
      oy: 5,
      odragabble: true,
    },
    {
      content: "1",
      ox: 2,
      oy: 5,
      odragabble: true,
    },
    {
      content: "8",
      ox: 3,
      oy: 5,
      odragabble: true,
    },
    //2
    {
      content: "2",
      ox: 7,
      oy: 1,
      odragabble: true,
    },
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
    {
      content: "2",
      ox: 7,
      oy: 5,
      odragabble: true,
    },
    {
      content: "-",
      ox: 7,
      oy: 6,
      odragabble: true,
    },

    //3
    {
      content: "3",
      ox: 12,
      oy: 3,
      odragabble: true,
    },
    {
      content: "-",
      ox: 11,
      oy: 4,
      odragabble: true,
    },
    {
      content: "-",
      ox: 12,
      oy: 4,
      odragabble: true,
    },
    {
      content: "1",
      ox: 12,
      oy: 5,
      odragabble: true,
    },
  ].map((b) => {
    return { ...b, x: 0, y: 0 };
  }),
} as LevelStub;
