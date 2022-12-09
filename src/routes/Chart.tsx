import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchCoinHistory } from "./api";

interface ChartProps {
  coinId: string;
}

function Chart({ coinId }: ChartProps) {
  const { isLoading, data } = useQuery(["ohlcv", coinId], () =>
    fetchCoinHistory(coinId)
  );

  return <h1>Chart</h1>;
}

export default Chart;

// import { useParams, useRouteMatch } from "react-router-dom";
// import styled from "styled-components";

// const Title = styled.div<{isActive:boolean}>`
//     color: ${props => props.isActive ? props.theme.accentColor: props.theme.textColor};
// `

// function Chart() {
//     const textColor = useRouteMatch("/:coinId/chart");
//     // console.log(textColor);
//     return <Title isActive={textColor !== null }>Chart</Title>;
//     }

// export default Chart;
