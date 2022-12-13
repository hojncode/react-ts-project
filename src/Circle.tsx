import { useState } from "react";
import styled from "styled-components";

// const x = (a:number, b:number) => a + b
// 이렇게 타입을 설정하는 방법 대신, 아래의 interface로 사용할 수 있다.
interface CircleProps {
  bgColor: string;
  borderColor?: string;
  text?: string;
}

interface ContainerProps {
  bgColor: string;
  borderColor: string;
}
// Container 에도 따로 ContainerProps를 만들어줘야 하지만, CircleProps와 내용이 같기 때문에 하나로 사용할 수 있다.
const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 50%;
  border: 1px solid ${(props) => props.borderColor};
`;

// borderColor ?? bgColor 뜻 => borderColor가 아무것도 없으면 (undefined)면 ,bgColor값을 가진다.
function Circle({
  bgColor,
  borderColor,
  text = "if text is not exist : default text",
}: CircleProps) {
  const [vaule, setValue] = useState("");
  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
      {text}
    </Container>
  );
}

export default Circle;

//test git

// ===========================================================//
// ** interface 사용 예시
// interface PlayerShape {
//     name:string;
//     age: number;
//     hello: number;
// }

// const sayHello = (plyerObj:PlayerShape) => `Hello ${plyerObj.name} you are ${plyerObj.age}`;

// sayHello({name:"hojn", age: 12, hello:2})
// sayHello({name:"hi", age:12, hello:1})
