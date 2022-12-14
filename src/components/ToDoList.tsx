import { useRecoilValue } from "recoil";
import { toDoState } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

function ToDoList() {
  //useRecoilValue로 가져오고, useSetRecoilState로 수정한다.
  // const value = useRecoilValue(toDoState);
  // const modFn = useSetRecoilState(toDoState);
  // 위 두줄을 아래 한줄로 합쳐서 사용할 수 있다.
  const toDos = useRecoilValue(toDoState);

  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <CreateToDo />
      <ul>
        {toDos.map((toDo) => (
          //{...toDo} 는 다음과 같다. text={toDo.text} category={toDo.category} id={toDo.id}
          <ToDo {...toDo} />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
