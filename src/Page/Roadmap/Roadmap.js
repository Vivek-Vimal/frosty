import React from 'react'
import styled from 'styled-components';
import bg from './bg4.png'
import mbg from './mbg4.png'
import road from './roadmap.svg'
import { Line, Circle } from 'rc-progress';
import { motion } from 'framer-motion';
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import point from './point.svg'

const Page = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    max-height: 100vh;
    width: 100%;
    background-color: #191970;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    padding: 0 0 5rem 0;
    @media only screen and (max-width: 768px) {
        background-image: url(${mbg});
        min-height: 40rem;
        width: 100%;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        padding: 2rem 0.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

const Box = styled.div`
        height: auto;
        width: 49%;
        text-align: center;
        
    `;

const H = styled.h2`
    color: #FFF;
    font-weight: bolder;
    font-size: 2.5rem;
    margin: 75% 0 0 0;
    @media only screen and (max-width: 768px) {
        font-weight: bold;
        font-size: 1.8rem;
        margin: -1rem 0 0 0;
        text-align: center;
      }
`;

const Hper = styled.h2`
    color:  rgba(246, 200, 29, 0.5) ;     // #f6c81d;   // rgba(246, 200, 29, 1)  
    font-weight: bold;
    font-size: 80px;
    margin-bottom: 1.5rem;
    @media only screen and (max-width: 1400px) {
        font-weight: 900;
        font-size: 60px;
        margin-bottom: 1.5rem;
      }
    @media only screen and (max-width: 768px) {
        font-weight: 900;
        font-size: 40px;
        margin-bottom: 0rem;
      }
`;

const Ht = styled.h2`
    color: #FFF;
    font-weight: 550;
    font-size: 2rem;
    @media only screen and (max-width: 768px) {
        font-weight: bolder;
        font-size: 1rem;
        text-align: center;
      }
`;

const T = styled.p`
    color: #FFF;
    font-weight: regular;
    font-size: 1.3rem;
    margin: 2rem 1rem;
    width: 25%;
    @media only screen and (max-width: 768px) {
        font-weight: 510;
        font-size: 1rem;
        margin: 1rem 0.5rem 0 0.5rem;
        width: auto;
    }
`;

const ProgresssBar = styled.div`
    width: 80%;
    margin: 5rem 1rem;
    @media only screen and (max-width: 1100px) {
        width: 100%;
        margin: 3rem 0 2rem 0;
    }
    @media only screen and (max-width: 768px) {
        width: 100%;
        margin: 2rem 0 2rem 0;
    }
`;

const Flex = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    text-align: center;
    @media only screen and (max-width: 768px) {
        display: none;
    }
`;

const Card = styled.div`
    background-color: #003070;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    width: auto;
    height: auto;
    border-radius: 1rem;
    display: grid;
    place-items: center;
    justify-content: space-between;
    padding: 80px 200px;
    z-index: 4;
    @media only screen and (max-width: 768px) {
        width: 95%;
        padding: 2rem 0.5rem 3rem 0.5rem;
        opacity: 0.9;
    }
`;

const Button = styled(motion.div)`
   cursor: pointer;
    border-radius: 1rem;
    height: 3rem ;
    width: 12rem;
    margin: 0.5rem 0 0 2rem;
    @media only screen and (max-width: 768px) {
        margin: 1rem 0 0 0;
        height: 2.7rem ;
        width: 80%;
    }
`;

const Input = styled.input`
    border: 2px solid #3368AE;
    background-color: transparent;
    border-radius: 1.5rem;
    color: #fbcf2c;
    font-size: 1.5rem;
    padding: 1rem;
    ::placeholder{
        color: #3368AE;
        font-size: 1.5rem;
    }
    &:focus {
        outline: none;
        border-color: #fbcf2c;
      }
    }
    @media only screen and (max-width: 768px) {
        font-size: 1rem;
        border-radius: 1rem;
    }
`;

const Hori = styled.div`
    display: flex;
    margin-top: 60px;
    
    @media only screen and (max-width: 768px) {
        display: grid;
        place-items: center;
        margin-top: 30px;
    }
`;

const PC = styled.div`
    display: block;
    width: 100%;
    // @media only screen and (max-width: 1025px) {
    //     width: 95%;
    // }
    @media only screen and (max-width: 768px) {
        display: none;
    }
`;

const Mobile = styled.div`
    display: none;
    @media only screen and (max-width: 768px) {
        display: grid;
        place-items: center;
        height: auto;
        width: 100%;
    }
`;

const SGrid = styled.div`
    display: block
    @media only screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

const ImgContainer = styled.div`
    @media only screen and (max-width: 768px) {
        width: 100%;
        height: 22rem;
        margin: 1rem 0 -12% 0;
      }
`;

const Style = styled.div`
    display: none;
    @media only screen and (max-width: 768px) {
      display: flex;
      margin-bottom: 2rem; 
           width: 100%;
      justify-content: space-between;
      
    }
`;

const Page4 = () => {
    return (
        <Page id="roadmap">
            <SGrid>
                <Mobile>
                    <div><img src={road} alt="" style={{width:"100%"}} /></div>    
                </Mobile>
                <H>Roadmap</H>
            </SGrid>
            
            <ProgresssBar>
                <Flex style={{padding:"0 4rem"}}>
                    <Hper style={{color:"#f6c81d"}}>10%</Hper>
                    <Hper style={{color:"#f6c81d"}}>25%</Hper>
                    <Hper style={{color:"#f6c81d"}}>50%</Hper>
                    <Hper>75%</Hper>
                    <Hper>100%</Hper>
                </Flex>
                
                <Style >
                    <Box>
                        <Hper>10%</Hper>
                        <T>Random community giveaways/contests/airdrops started</T>
                    </Box>
                    <Box>
                        <Hper>50%</Hper>
                        <T>Community Roadmap Voting Initiated</T>
                    </Box>
                </Style>
               
                <PC>
                <ProgressBar
                        stepPositions={5}
                        height={3}
                        percent={75}
                        filledBackground="linear-gradient(to right, #ed213a, #93291e)"
                    >
                    <Step transition="scale">
                    {({ accomplished }) => (
                        <img
                        style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                        width="40"
                        src={point}
                        />
                    )}
                    </Step>
                    <Step transition="scale">
                    {({ accomplished }) => (
                        <img
                        style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                        width="40"
                        src={point}
                        />
                    )}
                    </Step>
                    <Step transition="scale">
                    {({ accomplished }) => (
                        <img
                        style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                        width="40"
                        src={point}
                        />
                    )}
                    </Step>
                    <Step transition="scale">
                    {({ accomplished }) => (
                        <img
                        style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                        width="40"
                        src={point}
                        />
                    )}
                    </Step>
                    <Step transition="scale">
                    {({ accomplished }) => (
                        <img
                        style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                        width="40"
                        src={point}
                        />
                    )}
                    </Step>
                    
                </ProgressBar>
                </PC>
                <Mobile>
                     <Line 
                        style={{marginTop:"1.5rem"}}
                        percent="50" strokeWidth="2"
                        strokeColor="#c6250a" trailColor="#60304c" 
                        gapPosition="2rem 2rem 1rem 1rem"
                       
                    /> 
                </Mobile>
                <Flex>
                    <T>Random community giveaways/contests/airdrops started</T>
                    <T>Community Roadmap Voting Initiated</T>
                    <T>Community merch launched with exclusive gear for holders</T>
                    <T>Donations to community voted aquariums/sea clean up organizations</T>
                    <T>Super Secret Project Revealed  </T>
                </Flex>
            </ProgresssBar>

            
            <Style>
                <Box>
                    <Hper>75%</Hper>
                    <T>Community merch launched with exclusive gear for holders</T>
                </Box>
                <Box>
                    <Hper>100%</Hper>
                    <T>Super Secret Project Revealed</T>
                    
                </Box>
            </Style>
            

            <SGrid>

                {/* <Mobile>
                    <ImgContainer>
                        <img src={BB} alt="" style={{width:"100%",height:"100%"}} />
                    </ImgContainer>
                </Mobile> */}

                {/* <Card>
                    <Ht>Get Alerts on Scholarship / Students Loan Essay Contests.</Ht>
                    <Hori>
                        <Input placeholder="Enter Email"></Input>
                        <Button 
                            // type="button"
                            whileHover={{ scale: 1.1}}
                            whileTap={{ scale: 0.7 }}
                        ><img src={submit} alt="" style={{width:"100%",height:"150%"}} /></Button>
                    </Hori>
                </Card> */}

            </SGrid>
        </Page>
    )
}

export default Page4
