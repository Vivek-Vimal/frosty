import React from 'react'
import styled from 'styled-components'
import img from '../../components/Navbar/logo.png'
import Tilt from 'react-parallax-tilt';
import bg from './bg.jpg'
import theme from "styled-theming";

export const backgroundColor = theme("theme", {
    light: "#000000",
    dark: "#E5E5E5",
  });  

  const bColor = theme("theme", {
    light: "	#F8F8F8",
    dark: "#03157f",
  });


const Sec = styled.section`
width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 2rem 0;
    justify-content: center;
   background-color: ${bColor};
    @media only screen and (max-width: 768px) {
        
        padding: 1rem 0 2rem 0;
        flex-direction: column;
        justify-content: space-around;
      }
`;

export const Width = styled.div`
      width: 1600px;
      display: flex;
        
        
        justify-content: space-between;
      @media only screen and (max-width: 1700px) {
        width: 90%;
      }
    @media only screen and (max-width: 1400px) {
        width: 95%;
    }
    @media only screen and (max-width: 1100px) {
        flex-direction: column;
    }

`

const Left = styled.div`
        margin-right: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width:50%;
        
    @media only screen and (max-width: 1100px) {
        margin-right: 0;
        width: 100%;
        padding: 0 1rem;
        height: auto;
      }
`;

const Right = styled.div`
      margin-left: 2rem;
      width:50%;
      @media only screen and (max-width: 1100px) {
        width: 100%;
        padding: 0 1rem;
        height: auto;
        margin-left: 0;
      }
`;

const T = styled.p`
    color: ${backgroundColor};
    font-weight: 500;
    font-size: 1.5rem;
    margin-bottom: 2rem;
    text-align: left;
    @media only screen and (max-width: 768px) {
        font-weight: 510;
        font-size: 1rem;
        
      }
`;

const H = styled.h1`
    color: ${backgroundColor};
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 2rem;
    text-align: left;
    @media only screen and (max-width: 768px) {
        font-weight: 510;
        font-size: 1.2rem;
        font-weight: bold;
      }
`;

const Page5 = () => {
  
    return (
        <Sec id="learn">

          <Width>
            <Left>
                <H>Why Mint A Frosty Narwhal?</H>
                <T>Aside from owning one of the coolest NFTs on the planet, Frosty Narwhals come with a few community driven perks which are laid out in our roadmap. Being the holder of a Frosty Narwhal gives you access to exclusive channels in our discord that  give you the ability to directly guide the community by voting on upcoming community projects or suggesting new ideas. Frosty Narwhals are heavily based around the community and we want to give back to those who mint and hold a Frosty Narwhal. This will be done through community raffles, prizes, completions, giveaways and more!</T>
            </Left>

            

            <Right>

            <H>What About Off Chain?</H>
            <T>Not only are we committed to giving back to the community that holds one of the coolest projects on the blockchain, but we also want to give back to the world as well. A portion of all Frosty Narwhal sales will be donated to projects to help save narwhals around the world from things like climate change, overfishing and whaling. </T>

            </Right>

            </Width>
        </Sec>
    )
}

export default Page5
