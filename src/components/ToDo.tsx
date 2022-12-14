import React from "react";
import { useSetRecoilState } from "recoil";
import { IToDo, toDoState } from "../atoms";

// [
//   {
//       "text": "5",
//       "category": "TO_DO",
//       "id": 1671009352124
//   },
//   {
//       "text": "4",
//       "category": "TO_DO",
//       "id": 1671009351925
//   },
//   {
//       "text": "3",
//       "category": "TO_DO",
//       "id": 1671009351690
//   },
//   {
//       "text": "2",
//       "category": "TO_DO",
//       "id": 1671009351438
//   },
//   {
//       "text": "1",
//       "category": "TO_DO",
//       "id": 1671009351169
//   }
// ]

// 1 - find to do based on id [2]

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // console.log("I wanna go", event.currentTarget.name);
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      // console.log(targetIndex);
      const oldToDo = oldToDos[targetIndex];
      const newToDo = { text, id, category: name };
      console.log(
        "replace the to do in the index",
        targetIndex,
        "with",
        newToDo
      );
      return oldToDos;
    });
  };
  return (
    <li>
      <span>{text}</span>
      {category !== "DOING" && (
        // onClick={() => onClick("TO_DO") 이벤트리스너에 인자를 받고 싶을때 사용하는 형식. 참고할것,
        <button name="DOING" onClick={onClick}>
          Doing
        </button>
      )}
      {category !== "TO_DO" && (
        <button name="TO_DO" onClick={onClick}>
          To Do
        </button>
      )}
      {category !== "DONE" && (
        <button name="DONE" onClick={onClick}>
          Done
        </button>
      )}
    </li>
  );
}

export default ToDo;
