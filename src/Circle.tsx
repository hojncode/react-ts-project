import styled from "styled-components";

interface ContainerProps{
    bgColor:string;
}

const Container = styled.div<ContainerProps>`
    width: 200px;
    height: 200px;
    background-color: ${props => props.bgColor};
    border-radius: 50%;
`;

// const x = (a:number, b:number) => a + b

interface CircleProps {
    bgColor:string;
}

function Circle({bgColor}: CircleProps) {
    return <Container bgColor={bgColor}/>;
}

export default Circle;

interface PlayerShape {
    name:string;
    age: number;
    hello: number;
}

const sayHello = (plyerObj:PlayerShape) => `Hello ${plyerObj.name} you are ${plyerObj.age}`;


sayHello({name:"hojn", age: 12, hello:2})
sayHello({name:"hi", age:12, hello:1})