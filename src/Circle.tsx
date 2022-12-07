import styled from "styled-components";

// const x = (a:number, b:number) => a + b 
// 이렇게 타입을 설정하는 방법 대신, 아래의 interface로 사용할 수 있다.
interface CircleProps {
    bgColor:string;
}

// Container 에도 따로 ContainerProps를 만들어줘야 하지만, CircleProps와 내용이 같기 때문에 여기서는 하나로 사용하였음.
const Container = styled.div<CircleProps>`
    width: 200px;
    height: 200px;
    background-color: ${props => props.bgColor};
    border-radius: 50%;
`;

function Circle({bgColor}: CircleProps) {
    return <Container bgColor={bgColor}/>;
}

export default Circle;





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