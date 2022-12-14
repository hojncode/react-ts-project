import { useRecoilValue } from "recoil";
import { toDoSelector, toDoState } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

function ToDoList() {
  //useRecoilValue로 가져오고, useSetRecoilState로 수정한다.
  // const value = useRecoilValue(toDoState);
  // const modFn = useSetRecoilState(toDoState);
  // 위 두줄을 아래 한줄로 합쳐서 사용할 수 있다.
  // const toDos = useRecoilValue(toDoState);
  // console.log(toDos);
  const [toDo, doing, done] = useRecoilValue(toDoSelector);
  // console.log(selectorOutput);
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <CreateToDo />
      <h2>To Do</h2>
      <ul>
        {toDo.map((toDo) => (
          //{...toDo} 는 다음과 같다. text={toDo.text} category={toDo.category} id={toDo.id}
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
      <hr />
      <h2>Doing</h2>
      <ul>
        {doing.map((toDo) => (
          //{...toDo} 는 다음과 같다. text={toDo.text} category={toDo.category} id={toDo.id}
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
      <hr />
      <h2>Done</h2>
      <ul>
        {done.map((toDo) => (
          //{...toDo} 는 다음과 같다. text={toDo.text} category={toDo.category} id={toDo.id}
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
      <hr />
    </div>
  );
}

export default ToDoList;

// // * 배열에 요소 교체하기 , (배열의 순서는 고정되어있다 - 불변)
// const food = ["pizza", "mango", "kimchi", "kimbab"]
// const front = ["pizza"]
// const back = ["kimchi", "kimbab"]
// const finalPart = [...front,"감", ...back]

//  // slice 인자에 하나만 넣으면 그 인자의 숫자부터 마지막까지 범위가 지정된다.
// const food = ["pizza", "mango", "kimchi", "kimbab"]
// const target = 1;
// food.slice(0,1) -> ["pizza"]
// food.slice(target+1) -> ["kinchi", "kimbab"]
// [...food.slice(0, target), "감", ...food.slice(target+1)] -> ["pizza" , "감", "kinchi", "kimbab"]
