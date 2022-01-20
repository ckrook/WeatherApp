import { atom } from "recoil";

export const weatherIdState = atom({
  key: "weatherIdState",
  default: [],
});

export const selectedIdState = atom({
  key: "selectedIdState",
  default: [],
});
