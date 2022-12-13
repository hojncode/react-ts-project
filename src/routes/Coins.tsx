import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fetchCoins } from "./api";
import { Helmet } from "react-helmet-async";
import { useSetRecoilState } from "recoil";
import { isDarkAtom } from "../atoms";

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
//TODO:

//FIXME:
const CoinsList = styled.ul``;
const Coin = styled.div`
  background-color: ${(props) => props.theme.cardBgColor};
  color: ${(props) => props.theme.textColor};
  margin-bottom: 10px;
  border-radius: 15px;
  a {
    display: flex;
    align-items: center;
    transition: color 0.2s ease-in;
    // div 전체를 클릭해도 되게 만듬.
    padding: 20px;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Img = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

const Loader = styled.span`
  text-align: center;
  display: block;
  font-size: 48px;
`;

interface ICoin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

interface ICoinsProps {}

function Coins({}: ICoinsProps) {
  const setDarkAtom = useSetRecoilState(isDarkAtom);
  const toggleDarkAtom = () => setDarkAtom((prev) => !prev);
  const { isLoading, data } = useQuery<ICoin[]>(["allCoins"], fetchCoins);
  console.log(isLoading, data);
  // const [coins, setCoins] = useState<ICoin[]>([]);
  // const [loading, setLoading] = useState(true);
  // useEffect(()=> {
  //     (async() => {
  //         const response = await fetch("https://api.coinpaprika.com/v1/coins");
  //         const json = await response.json();
  //         setCoins(json.slice(0,100));
  //         // 내가 추가한 코드 setTimeout
  //         setTimeout(() => {setLoading(false);}, 0);
  //     })();
  // },[]);
  return (
    <Container>
      {/* <Helmet>
        <title>코인</title>
      </Helmet> */}
      <Header>
        <Title>코인</Title>
        <button onClick={toggleDarkAtom}>Toggle mode</button>
      </Header>
      {isLoading ? (
        <Loader>"Loading..."</Loader>
      ) : (
        <CoinsList>
          {data?.slice(0, 100).map((coin) => (
            <Coin key={coin.id}>
              <Link
                to={{
                  pathname: `/${coin.id}`,
                  state: { name: coin.name },
                }}
              >
                <Img
                  src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
                />
                {coin.name} &rarr;
              </Link>
              {/* <a href={`/${coin.id}`}>
                            <Img src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}/>
                            {coin.name} &rarr;
                        </a> */}
            </Coin>
          ))}
        </CoinsList>
      )}
    </Container>
  );
}

export default Coins;
