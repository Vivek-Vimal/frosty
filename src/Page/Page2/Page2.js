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
    light: "#F8F8F8",
    dark: "#03157f",
  });  

const Sec = styled.section`
    width: 100%;
    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 3rem 0 2rem 0;
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
        
        align-items: center;
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
     
    @media only screen and (max-width: 1100px) {
        margin-right: 0;
        width: 100%;
        padding: 0 1rem;
        height: auto;
      }
`;

const Right = styled.div`
      margin-left: 2rem;
      @media only screen and (max-width: 1100px) {
        width: 100%;
        height: auto;
        margin-left: 0;
        padding: 0 1rem;
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

const Page2 = () => {
  
    return (
        <Sec id="rarity">

            <Width>
            
            <Left>

                <H>What Are Frosty Narwhals?</H>
                <T>Frosty Narwhals are 4004 unique procedurally generated narwhals from a pool of over 100 different assets. These narwhals have a variety of different traits such as colors, horn types, handheld items and more which allow for over 1.3 million unique combinations. On top of that, since narwhals swim in the Arctic that makes all of them cool. Combine that with an awesome project and you get an even cooler outcome, so cool some would say freezing, or even frosty.</T>

            </Left>

            <Right>

                <H>How Do I Determine How Frosty my Narwhals Is?</H>
                <T>To start, all narwhals are exceptionally cool which makes them all frosty - but with that being said, some are naturally cooler than others depending on what they generated with. There’s a few ways to determine how frosty your narwhal is, the easiest would be your narwhals rarity score. This can be done by looking on the website and checking out the rarity list in our Discord. OpenSeas also displays property percentages as well if you want a more detailed breakdown. You can also check out your narwhal on rarity tools found (here).</T>

            </Right>

            {/* <Right>
                <img src={img} alt="" style={{width:"100%",height:"100%"}} />
            </Right> */}
            </Width>
        </Sec>
    )
}

export default Page2
