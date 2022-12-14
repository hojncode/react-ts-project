import { atom } from "recoil";

export interface IToDo {
  text: string;
  // "" 안에 잇는 문자만 허용된다.
  category: "TO_DO" | "DOING" | "DONE";
  id: number;
}

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});
