import { useRouteMatch } from "react-router-dom";
import styled from "styled-components";

const Title = styled.div<{isActive:boolean}>`
    color: ${props => props.isActive ? props.theme.accentColor: props.theme.textColor};
`

function Chart() {
    const textColor = useRouteMatch("/:coinId/chart");
    // console.log(textColor);
    return <Title isActive={textColor !== null }>Chart</Title>;
    }
    
export default Chart;