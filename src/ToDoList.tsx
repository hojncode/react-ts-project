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
interface IForm {
  email: string;
  firstName: string;
  lastName: string;
  userName: string;
  passWord: string;
  passWord1: string;
  extraError?: string;
}

function ToDoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IForm>({
    defaultValues: {
      email: "@naver.com",
    },
  });
  const onValid = (data: IForm) => {
    // console.log(data);
    if (data.passWord !== data.passWord1) {
      setError(
        "passWord1",
        { message: "Password need to same" },
        { shouldFocus: true }
      );
    }
    setError("extraError", { message: "Server error" });
  };
  console.log(errors);

  return (
    <div>
      {/* { required: true } 를 사용하는 이유는 , 자바스크립트에서 동작하게 하기 위함(html 에서 required가 동작하면 브라우저 이외의 환경에서 사용시 required가 작동 안함 == required는  HTML Input태그의 속성이기때문) */}
      <form
        style={{ display: "flex", flexDirection: "column", color: "white" }}
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
            minLength: {
              value: 11,
              message: "Please write your email address",
            },
          })}
          placeholder="Write here your Email!!"
        />
        <span>{errors?.email?.message}</span>
        <input
          {...register("firstName", {
            required: "firstName please",
            // validate: (value) =>
            //   value.includes("hojn") ? "hojn is not allowed" : true,
            validate: {
              noHojn: (value) =>
                value.includes("hojn") ? "hojn is not allowed" : true,
              noLee: (value) =>
                value.includes("Lee") ? "no Lee allowed" : true,
            },
          })}
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
        {/* ?를 붙히면 , errors 가 undefined 면 extraError을 찾지 않는다. == ?를 붙힌 항목이 undefined 면 그 뒤를 실행 하지 않는다 */}
        <span>{errors?.extraError?.message}</span>
      </form>
    </div>
  );
}

export default ToDoList;
