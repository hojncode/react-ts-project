import Router from "./Router";




function App() {
  return <Router/>;
}

export default App;





















//=========================================================================//
// const Container = styled.div`
//   background-color : ${props => props.theme.bgColor};
// `
// const H1 = styled.h1`
//   color : ${props => props.theme.textColor};
// `

// interface DummyProps {
//   text?: string;
//   active?: boolean;
//   otherThingHere?: boolean;
//   theme?:boolean;
//   lightTheme?:string;
//   darkTheme?:string;
//   value?:boolean
// }

// function Dummy ({text, active,otherThingHere}: DummyProps) {
//   return <H1>{text}</H1>
// }


// function App({theme}:DummyProps) {
//   const [value, setValue] = useState("");
//   const onClick = (event:React.FormEvent<HTMLButtonElement>) => {
//     event.preventDefault();
//     if (theme === true) {
//       return setValue("1")
//     } else setValue("2");
    
//     console.log(value)
//   }
     
//     return (
//       <>
//       <Container>
//         <H1>protected by TS</H1>
//         <Dummy active={true} text="hello"></Dummy>
//         <form>
//           <button value={value} onClick={onClick}>Click this</button>
//         </form>
//       </Container>
//       </>
//     )
// }
// export default App;





//=============================================================//
  // const [value, setValue] = useState("");
  // // event 에 타입을 적용하는 방법 (외울 필요는 없다 , not intuitive)
  // const onChange = (event: React.FormEvent<HTMLInputElement>) => {
  //   // console.log(event.currentTarget.value) 
  //   // currentTarget : TS를 만든사람이 target 대신 선택함. (target과 같음)
  //   // ES6 문법 (구조분해할당) : currentTarget 안에서 4개의 값을 가져온다면 더 유용하게 사용할 수 있기 때문에 사용한다.
  //   //       예시) const {
  //   //             currentTarget: {value, tagName, width, id}
  //   //           } = event;
  //   const {
  //     currentTarget: {value}
  //   } = event;
  //   setValue(value);
  // };

  // const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   console.log("hello", value);
  //   setValue("");
  // };

  // return (
  //   <>
  //   <form onSubmit={onSubmit}>
  //     <input value={value} onChange={onChange} type="text" className="text" />
  //     <button>Log in</button>
  //   </form>
  //   </>
  // );


