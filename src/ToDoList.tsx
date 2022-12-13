import { useForm } from "react-hook-form";
import { DefaultValue } from "recoil";

// function ToDoList() {
//   const [toDo, setToDo] = useState("");
//   const [toDoError, setToDoError] = useState("");
//   const onChange = (event: React.FormEvent<HTMLInputElement>) => {
//     const {
//       currentTarget: { value },
//     } = event;
//     setToDoError("");
//     setToDo(value);
//   };
//   const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     if (toDo.length < 10) {
//       return setToDoError("To do should be longer");
//     }
//     console.log("submit");
//   };

//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input onChange={onChange} value={toDo} placeholder="Write a to do" />
//         <button>Add</button>
//         {toDoError !== "" ? toDoError : null}
//       </form>
//     </div>
//   );
// }
interface IError {
  email: string;
  firstName: string;
  lastName: string;
  userName: string;
  passWord: string;
  passWord1: string;
}

function ToDoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IError>({
    defaultValues: {
      email: "@naver.com",
    },
  });
  const onValid = (data: any) => {
    // console.log(data);
  };
  console.log(errors);

  return (
    <div>
      {/* { required: true } 를 사용하는 이유는 , 자바스크립트에서 동작하게 하기 위함(html 에서 required가 동작하면 브라우저 이외의 환경에서 사용시 required가 작동 안함 == required는  HTML Input태그의 속성이기때문) */}
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          // required 사용시, 타입 확인해서 원하는 값을 넣을 수 있다.
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /[a-zA-Z0-9._%+-@]+naver.com/,
              message: "Email please",
            },
            minLength: 11,
          })}
          placeholder="Write here your Email!!"
        />
        <span>{errors.email?.message}</span>
        <input
          {...register("firstName", { required: "firstName please" })}
          placeholder="First Name"
        />
        <span>{errors?.firstName?.message}</span>
        <input
          {...register("lastName", { required: "lastName please" })}
          placeholder="Last Name"
        />
        <span>{errors?.lastName?.message}</span>
        <input
          {...register("userName", {
            required: "userName please",
            minLength: 5,
          })}
          placeholder="User Name"
        />
        <span>{errors?.userName?.message}</span>
        <input
          {...register("passWord", {
            required: "Password please",
            minLength: 4,
          })}
          placeholder="Password"
        />
        <span>{errors?.passWord?.message}</span>
        <input
          // required 에 string을 넣어주면 message로 출력된다 , minLength에 message를 객체로 추가해주면 출력된다.
          {...register("passWord1", {
            required: "Password1 please",
            minLength: {
              value: 4,
              message: "4자 이상 입력 해야 합니다",
            },
          })}
          placeholder="Password1"
        />
        <span>{errors?.passWord1?.message}</span>

        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
