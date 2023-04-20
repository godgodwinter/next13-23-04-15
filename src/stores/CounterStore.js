import { atom, selector } from "recoil";

export const counterState = atom({
  key: "counter",
  default: 0,
});

export const counterSelector = selector({
  key: "counterSelector",
  get: ({ get }) => get(counterState),
});
