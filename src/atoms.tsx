import { atom, selector } from "recoil";

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

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    return [
      toDos.filter((toDo) => toDo.category === "TO_DO"),
      toDos.filter((toDo) => toDo.category === "DOING"),
      toDos.filter((toDo) => toDo.category === "DONE"),
    ];
  },
});
