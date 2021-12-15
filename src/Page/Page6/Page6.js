import React from 'react'
import './Back.css'
import styled from 'styled-components'
// import bg from './bbg.png'
// import nbg from './nbg.png'
import theme from "styled-theming";
import bbg from './bbg.png'
import nbg from './nbg.png'
import { Width } from '../Page5/Page5';

const backgroundImagePage6 = theme("theme", {
    light: bbg,
    dark: nbg,
  });

const backgroundColor = theme("theme", {
    light: "#a1dcf2",
    dark: "#27343a",
  });


export const bColor = theme("theme", {
  light: "#000000",
  dark: "#E5E5E5",
});  


const Sec = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    padding: 2rem 0;
    width: 100%;
  
    @media only screen and (max-width: 768px) {
        
        width: 100%;
        padding: 5rem 0.5rem 5rem 0.5rem;
        flex-direction: column;
        
    }

`

const Left = styled.div`
width: 49%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background: red;
    @media only screen and (max-width: 768px) {
        margin-right: 0;
        width: 100%;
        padding: 0 1rem;
      }
`;

const Right = styled.div`
width: 49%;
      display: flex;
        flex-direction: column;
        justify-content: space-between;
      @media only screen and (max-width: 768px) {
        width: 100%;
        padding: 0 1rem;
      }
`;

const T = styled.p`
    color: ${bColor};
    font-weight: 500;
    font-size: 1.5rem;
    margin-bottom: 2rem;
    @media only screen and (max-width: 768px) {
        font-weight: 510;
        font-size: 1rem;
      }
`;

const H = styled.h1`
    color: ${bColor};
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 2rem;
    @media only screen and (max-width: 768px) {
        font-weight: 510;
        font-size: 1.2rem;
        font-weight: bold;
      }
`;

const Page6 = () => {
    return (
        <Sec id="roadmap">
          <Width>
             <Left>
                <H>Why Mint A Frosty Narwhal?</H>
                <T>Aside from owning one of the coolest NFTs on the planet, Frosty Narwhals come with a few community driven perks which are laid out in our roadmap. Being the holder of a Frosty Narwhal gives you access to exclusive channels in our discord that  give you the ability to directly guide the community by voting on upcoming community projects or suggesting new ideas. Frosty Narwhals are heavily based around the community and we want to give back to those who mint and hold a Frosty Narwhal. This will be done through community raffles, prizes, completions, giveaways and more!</T>
            </Left>
            
            <Right>
                <H>What’s The Future Look Like?</H>
                <T>Well none of us can time travel but we can say that the future is looking pretty cool. Frosty Narwhals are more than just an NFT, and we will be working on building the community post launch through community voted projects, competitions and more. To reward early holders we plan to implement a system to breed your narwhals to create new ones while preserving  traits from the originals. We will be working directly with the community on how best to implement this!</T>
            </Right>
          </Width>
        </Sec>
    )
}

export default Page6
