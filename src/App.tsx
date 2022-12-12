import { createGlobalStyle, ThemeProvider } from "styled-components";
import Router from "./Router";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { darkTheme, lightTheme } from "./theme";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "./atoms";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
* {
  box-sizing: border-box;
}
body {
  font-family: 'Source Sans Pro', sans-serif;
  background-color:${(props) => props.theme.bgColor};
  font-weight: 300;
  color:${(props) => props.theme.textColor};
  line-height: 1.2;
}
a {
  text-decoration:none;
  color: inherit;
}
`;

const queryClient = new QueryClient();

function App() {
  const isDark = useRecoilValue(isDarkAtom);
  return (
    <>
      <QueryClientProvider client={queryClient}>
        {/* The rest of your application */}
        <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
          <GlobalStyle />
          <Router />
          <ReactQueryDevtools initialIsOpen={true} />
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
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
