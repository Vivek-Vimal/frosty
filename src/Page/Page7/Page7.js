import React from 'react'
import styled from 'styled-components'
// import img from '../../components/Navbar/logo.png'
import bg from './bg.png'
import bgg from './day.gif'
import nbgg from './night.gif'
import theme from "styled-theming";
import videoD from '../Page1/d.mp4'
import videoN from '../Page1/n.mp4'
import './Css.css'
import { TOGGLE_DARKTHEME } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";

const backgroundImagePage7 = theme("theme", {
    light: bgg,
    dark: nbgg,
  });

const backgroundColor = theme("theme", {
    light: "#064571",
    dark: "#040b1e",
  });

  export const bColor = theme("theme", {
    light: "#000000",
    dark: "#E5E5E5",
  });  
  

  export const bhColor = theme("theme", {
    light: "#E5E5E5",
    dark: "#000000",
  });  

const Sec = styled.section`
    min-height: 100vh;
    width: 100%;
     position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // padding: 0 0 2rem 0;
     background-image: url(${backgroundImagePage7});
    background-color: ${backgroundColor};
    background-size: 100% auto;
    background-repeat: no-repeat;
    @media only screen and (max-width: 768px) {
        padding: 2rem 0;
        min-height: 100vh;
      }
`;

const Width = styled.div`
      width: 1600px;
      display: flex;
      flex-direction: column;
        align-items: center;
        justify-content: space-between;
      @media only screen and (max-width: 1700px) {
        width: 95%;
      }
    @media only screen and (max-width: 1400px) {
        width: 97%;
    }
   

`

const Upper = styled.div`
        width: 100%;
        height: auto;
        // background-color:#7FFFD4;
        padding: 2rem 0 0 0;
    @media only screen and (max-width: 768px) {
        padding: 2rem 1rem;
        
      }
`;

const Lower = styled.div`
      width: 100%;
      height: auto;
      // padding: 2rem 0 0 0;
    //   background-color: #FFDB58;
      @media only screen and (max-width: 768px) {
        padding: 2rem 1rem;
       
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
    color: ${bColor} ;
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 2rem;
    @media only screen and (max-width: 768px) {
        font-weight: 510;
        font-size: 1.2rem;
        font-weight: bold;
      }
`;

const Hm = styled.h1`
    color: ${bColor};
    font-size: 4rem;
    font-weight: bold;
    margin-bottom: 1rem;
    @media only screen and (max-width: 768px) {
        font-weight: bold;
        font-size: 2rem;
        font-weight: bold;
      }
`;

const Header = styled.div`
    // background-image: url(${bg});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    width: 100%;
    height: auto;
    display: grid;
    place-items: center;
    padding: 5rem  0 0 0 ;
    @media only screen and (max-width: 768px) {
        background-size: auto 100%;
        height: auto;
        background-image: none;
        padding: 2rem  0 0 0 ;
      }
`;

const Widthu = styled.div`
      width: 1600px;
      display: flex;
      
      margin: 2rem 0 0 0;
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
      width:50%;
      
     
    @media only screen and (max-width: 1100px) {
        margin-right: 0;
        width: 100%;
        padding: 0 1rem;
      }
`;

const Right = styled.div`
width:50%;
      
margin-left: 2rem;
      @media only screen and (max-width: 1100px) {
        width: 100%;
        padding: 0 1rem;
        margin-left: 0rem;
      }
`;

const Row = styled.div`
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      margin: 1rem 2rem 1rem 2rem;
      padding: 2rem 2rem 0 2rem;
      background-color: ${bhColor};
      border-radius: 2rem;
      @media only screen and (max-width: 768px) {
        width: 95%;
        padding: 2rem 1rem 0 1rem;
        margin: 1rem 0;
        border-radius: 1.5rem;
      }
`;

const Page7 = () => {

  const darkThemeEnabled = useSelector((state) => state.preferences.darkThemeEnabled);
  
    return (
        <Sec id="faq">
          {/* <video autoPlay loop muted className="video">
            
            <source src={darkThemeEnabled? videoN : videoD} type="video/mp4"/> 
           </video>  */}
          <Widthu>
          
            
            <Left >
                
                    <H>I’m Sold How Much?</H>
                    <T>Every Frost Narwhal costs .05 eth to start, the more you mint however the more each one will cost. This is to help grow the community by allowing as many individual holders as possible and to limit large bag holders. We also put a mint cap of 10 Frosty Narwhals per wallet to help protect the community as well. </T>
                
             
            </Left>
            <Right>
                <H>What’s The Future Look Like?</H>
                <T>Well none of us can time travel but we can say that the future is looking pretty cool. Frosty Narwhals are more than just an NFT, and we will be working on building the community post launch through community voted projects, competitions and more. To reward early holders we plan to implement a system to breed your narwhals to create new ones while preserving  traits from the originals. We will be working directly with the community on how best to implement this!</T>
            </Right>
          </Widthu>
          <Width>
            <Header>
                <Hm>FAQ</Hm>
            </Header>
            
            <Upper>
                <Row>
                  <H>What’s An NFT?</H>
                  <T>An NFT stands for “Non-fungible token”. This is a complicated way of saying a non replicable digital asset that users can buy, own, and trade. While the art from one piece to the next may look the same, every NFT is stored on the blockchain with a unique identifier which makes it impossible to replicate. NFTs have a variety of functions from being digital art, exclusive access to websites, or allowing participation in an event. </T>
                </Row>

                <Row>
                  <H>What Is Gas?</H>
                  <T>Gas is the cost from moving something on chain from one place to another. Every transaction has to be validated (approved) by an on chain third party. Gas pays for the transfer cost plus a tip to these validators so your transaction gets added to the list. In the case of Frosty Narwhals, gas is needed to mint a Narwhal and transfer it to your MetaMask wallet.  </T>
                </Row>
            </Upper>
        
            <Lower>
              <Row>
                <H>What is Metamask?</H>
                <T>Metamask is a crypto wallet that can store your crypto keys. Since everything is stored on the blockchain including your NFTs and cryptocurrency you need a way to access it. Metamask is the link between you and the chain that is needed to purchase and mint a Frosty Narwhal. Every wallet has a unique address to the chain (i.e. 0xABC…123), this is where your NFT will be stored. If you want to learn more about Metamask and it’s utility/how easy it is to use then click this link here!</T>
              </Row>
              <Row>
                <H>Where is my Frosty Narwhal ?</H>
                <T>Your Frosty Narwhals are connected to whatever wallet you used to mint it. You can also view your narwhals on OpenSeas.</T>
              </Row>
              <Row>
                <H>Where can I go to learn more?</H>
                <T>To learn more about Frosty Narwhals you can either check out our Twitter (here) or chat with us and other community members on our discord (here). </T>
              </Row>
              <Row>
                <H>Who’s behind the project?</H>
                <T>Just a couple of cool dudes who set out to create a lasting positive impact in the NFT community:

            <div style={{margin:"1rem  0 0 0"}}><span style={{fontWeight:"bold"}}>Bearded.</span> The only one on the team with a beard, a mighty fine beard at that.</div>
            <div><span style={{fontWeight:"bold"}}>Rex.</span> Innovator, lives in Yokosuka Japan, loves wasabi</div>
            <div><span style={{fontWeight:"bold"}}>DG.</span> Artist, </div>
                </T>
              </Row>
            </Lower>
          
            <H
                style={{margin:"1rem 0 2rem 0"}}
            >© 2021 Frosty Narwhals </H>
          </Width>
        </Sec>
    )
}

export default Page7
