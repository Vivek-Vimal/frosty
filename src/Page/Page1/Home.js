import React,{ useState, useEffect} from 'react'
import styled from 'styled-components'
import './Dark.css'
// import bg from './bg.gif'
import blue from './whaLe.png'
import yellow from './yellow.png'
import { motion } from 'framer-motion'
import DarkModeToggle from "react-dark-mode-toggle";
import { useSelector, useDispatch } from "react-redux";
import { TOGGLE_DARKTHEME } from "../../redux/actions";
import theme from "styled-theming";
import { BsBoxArrowUp } from 'react-icons/bs';
import { Link, animateScroll as scroll } from "react-scroll";
import twi from './twitter.png'
import dis from './discord.png'
import open from './opensea.svg'
import videoD from './d.mp4'
import videoN from './n.mp4'
import { FcPlus } from 'react-icons/fc';
import { FaMinusCircle } from 'react-icons/fa';

const buttonColor = theme("theme", {
    light: "linear-gradient(to right, #ff4e50, #f9d423)",
    dark: "linear-gradient(to right, #ff4e50, #f9d423)",
  });

const bColor = theme("theme", {
    light: "#7990de",
    dark: "#03157f",
  });  

const iconColor = theme("theme", {
    light: "linear-gradient(to right, #0f0c29, #302b63, #24243e)",
    dark: "linear-gradient(to right, #fc00ff, #00dbde)",
  });  

  const heroImg = theme("theme", {
    light: blue,
    dark: blue,
  });  

  const bg = theme("theme", {
    light: "#000000",
    dark: "#FFFFFF",
  });    

  const hu = theme("theme", {
    light: "#3F00FF",
    dark: "#FFBF00",
  });

const HomePage = styled.section`
  display: flex;
  background: ${bColor} ;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  background-size: 100% 100%;
  background-repeat: no-repeat;
 padding: 4rem  0 0 0;
@media only screen and (max-width: 768px) {
    min-height: 50rem;
    width: 100%;
    padding: 0rem 0.5rem 2rem 0.5rem;
    background-size: auto 100%;
    flex-direction: column;
}`;

const Width = styled.div`
      width: 1600px;
      display: flex;
      flex-direction: column;
        align-items: center;
        justify-content: space-between;
      @media only screen and (max-width: 1700px) {
        width: 98%;
      }
      @media only screen and (max-width: 1500px) {
        
        padding: 4rem 0 2rem 0;
      }
      @media only screen and (max-width: 1225px) {
        
        padding: 12rem 0 2rem 0;
      }
    @media only screen and (max-width: 786px) {
      padding: 4rem 0 2rem 0;
  }

`

const HeroImg = styled(motion.div)`
    width: 25rem;
    height: 20rem;
    background-size: 100% 100%;
background-repeat: no-repeat;
background-image: url(${heroImg});
    @media only screen and (max-width: 1400px) {
        width: 30rem;
        height: 22rem;
      }
    @media only screen and (max-width: 768px) {
        width: 15rem;
        height: 12rem;
      }
`;

const T = styled.p`
    color: ${bg};
    font-weight: 500;
    font-size: 1.3rem;
    
    @media only screen and (max-width: 768px) {
        font-weight: 510;
        font-size: 1rem;
      }
`;

const Center = styled.div`
        width: auto;
        height: auto;
        display: grid;
        place-items: center;
        padding: 1rem 2.5rem 0 2.5rem;                                                                                    rem;
        // background-color: rgba(135, 206, 235, .4);  
        // backdrop-filter: blur(5px);
         border-radius: 0.5rem;
        // border: 1px solid black;
      @media only screen and (max-width: 800px) {
        padding: 1rem 4rem 0 4rem;
      }
      @media only screen and (max-width: 500px) {
        padding: 1rem 1rem 0 1rem;
        width: 99%;
      }
`;

const  Button = styled.button`
     background: ${buttonColor} ;
     
     color:#000000 ;
     border: none;
     font-size: 3.5rem;
     font-weight: bold;
     cursor: pointer;
     padding: 0.3rem 3rem;
     border-radius: 2.5rem;
     box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
        -webkit-transition-property: transform;
        transition-property: transform;
    
    &:hover, &:focus,&:active {
        -webkit-transform: scale(1.1) rotate(4deg);
        transform: scale(1.1) rotate(4deg);
      }
      @media only screen and (max-width: 1400px) {
        font-size: 3.6rem;
        padding: 0.3rem 2rem;
        border-radius: 2rem;
        
      }

     @media only screen and (max-width: 768px) {
        font-size: 2rem;
        padding: 0.3rem 1rem;
        border-radius: 1.2rem;
       
      }
      
`;

const ModeButton = styled(DarkModeToggle)`
      position: fixed;
      bottom: 10%;
      left: 5rem;
      z-index: 9999;
      @media only screen and (max-width: 768px) {
        top : 5rem;
        left: 2rem;
      }
`
const ShowButton = styled(Link)`
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    background: ${iconColor};
    color: #FFF ;
    font-weight: bold;
    cursor: pointer;
    position: fixed;
    height: 4rem;
    width: 3rem;
    border-radius: 0.5rem;
    transition:  0.5s linear;
    right: 2rem ;
    bottom: 5rem;
    display: grid;
    place-items: center;
    z-index: 9999;
`

const IconContainer = styled.div`
  display: flex;
  margin: 1rem 0;
`

const Icon1 = styled(motion.div)`
  width: 4.5rem;
  height: 4rem;
  cursor: pointer;
  border-radius: 1rem;
  padding: 0.5rem;
  
  @media only screen and (max-width: 768px) {
    width: 3rem;
  height: 3rem;
  
  }
  @media only screen and (max-width: 350px) {
  
 
  }
`

const IconM = styled(motion.div)`
  width: 4.5rem;
  height: 4rem;
  cursor: pointer;
  border-radius: 1rem;
  padding: 0.5rem;
  margin: 0 1rem;
  @media only screen and (max-width: 768px) {
    width: 3rem;
  height: 3rem;
  
  }
  @media only screen and (max-width: 350px) {
  
 
  }
`

const Icon2 = styled(motion.div)`
  width: 4.5rem;
  height: 4rem;
  cursor: pointer;
  border-radius: 1rem;
  padding: 0.5rem;
 
  @media only screen and (max-width: 768px) {
    width: 3rem;
  height: 3rem;
 
  }
  @media only screen and (max-width: 350px) {
  
    }
`

const Leftu = styled.div`
        
       
          display: flex;
        align-items: center;
        // background-color: rgba(135, 206, 235, .4);  
        // backdrop-filter: blur(10px);
        border-radius: 0.5rem;
        border: 1px solid black;
        padding: 2rem;
        margin-right: 1rem;
        }
        @media only screen and (max-width: 700px) {
          margin-right: 0rem;
        }
        @media only screen and (max-width: 500px) {
          padding: 1rem;
          width: 99%;
        }
        
`;

const Rightu = styled(motion.div)`
   
        
        
          display: flex;
   flex-direction: column;
        align-items: center;
        // background-color: rgba(135, 206, 235, .4);  
        // backdrop-filter: blur(10px);
        border-radius: 0.5rem;
        border: 1px solid black;
        padding: 2rem;
        margin-left: 1rem;
        }
        @media only screen and (max-width: 700px) {
          margin-left: 0rem;
          margin: 1rem  0 0
        }
        @media only screen and (max-width: 500px) {
          padding: 1rem ;
          width: 99%;
        }
`;

const Hu = styled.h2`
    color: ${hu};
    font-weight: bold;
    font-size: 30px;

    @media only screen and (max-width: 768px) {
        font-weight: bold;
        font-size: 1.3rem;
        
      }
`;

const Small = styled.div`
      margin: 0 2rem;
     
      @media only screen and (max-width: 768px) {
        
        width: 100%;
      }
`;

const Smallu = styled.div`
      margin: 0 0 0 2rem ;
     
      @media only screen and (max-width: 768px) {
        
        width: 100%;
      }
`;

const Upper = styled.div`

    @media only screen and (max-width: 768px) {
        
      }
`;

const  Buttonu = styled(motion.button)`
     background: ${buttonColor} ;
     color: #000000;
     border: none;
     font-size: 2rem;
     font-weight: bold;
     cursor: pointer;
     padding: 0.5rem 2rem;
     border-radius: 2.5rem;
     margin: 1rem 0 0 0;
     box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
      
      @media only screen and (max-width: 1400px) {
        font-size: 1.6rem;
        padding: 0.3rem 2rem;
        border-radius: 2rem;
        
      }

     @media only screen and (max-width: 768px) {
        font-size: 1rem;
        padding: 0.3rem 1rem;
        border-radius: 1.2rem;
       
      }
      
`;

const Flex = styled.div`
      
      
     
        display: flex;
        margin: 2rem 0 0 0;
      
      @media only screen and (max-width: 700px) {
        flex-direction: column;
      }
`

const Home = () => {

    const darkThemeEnabled = useSelector((state) => state.preferences.darkThemeEnabled);
    const dispatch = useDispatch();
    
    const [ showButton, setShowButton ] = useState(false)

    const [noOfNFT, setNoOfNFT] = useState(null);
    const [priceForNft, setpriceForNft] = useState(0);
    const [value, setvalue] = useState(0);

    const showButtonTop = () => {
      // console.log(window.scrollY)
      if (window.scrollY >= 600) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    }
  
    useEffect(() => {
      showButtonTop()
      // adding the event when scroll change background
      window.addEventListener("scroll", showButtonTop)
    })  

    useEffect(() => {
      
    },[darkThemeEnabled])


    return (
        <HomePage id="home">
          <Width>

            <Center>
               <HeroImg
                initial={{ x: 0, y:0}}
                animate={{ x: 0, y: -25 }}
                transition={{ duration: 1, repeat: Infinity ,repeatType: "reverse",}}
               >
                   {/* <img src= {heroImg} alt="" style={{width:"100%",height:"100%"}} /> */}
               </HeroImg>
               
               <Button 
                type="button"
               >
                   INSTALL
               </Button>
               <IconContainer>
                 <Icon1
                  whileHover={{ scale: 1.1,boxShadow:"0 0 25px #000"}}
                  whileTap={{ scale: 0.7 }}
                 >
                   <img src={twi} alt="" style={{width:"100%",height:"100%"}} />
                 </Icon1>

                 <IconM
                  whileHover={{ scale: 1.1,boxShadow:"0 0 25px #000"}}
                  whileTap={{ scale: 0.7 }}
                 >
                   <img src={open} alt="" style={{width:"100%",height:"100%"}} />
                 </IconM>
                 
                 <Icon2
                  whileHover={{ scale: 1.1,boxShadow:"0 0 25px 	#000"}}
                  whileTap={{ scale: 0.7 }}
                 >
                  <img src={dis} alt="" style={{width:"100%",height:"100%"}} />
                 </Icon2>
               </IconContainer>
            </Center>

          <Flex>
            <Leftu>

            <T>SOLD OUT</T>
            <Small>
              <T style={{padding:"0 0 0 1rem",margin:"0 0 1rem 0"}}>Cost</T>
              <Hu style={{margin:"0"}} >.0420 eth</Hu>
            </Small>
            <T>
              Max 20
            </T>

            </Leftu>

            <Rightu>
              <div style={{display:"flex"}}>
                  <Upper>
                              <FaMinusCircle className="iconL" onClick={() => {
                                  if (noOfNFT > 0) {
                                      setNoOfNFT(noOfNFT - 1)
                                  }
                              }} />

                              <input placeholder="NFT" value={noOfNFT} style={{ width:"12rem", height:"3rem",borderRadius:"0.5rem",border: "none",fontSize:"1.5rem",paddingLeft:"0.5rem" }} onChange={(e) => { setpriceForNft(parseInt(e.target.value) || 0); 
                                  setNoOfNFT( parseInt( e.target.value))
                                  setvalue(e.target.value) }} type="number" />

                              <FcPlus className="iconR" onClick={() => {
                                  if (noOfNFT < 20) {
                                      setNoOfNFT(noOfNFT + 1)
                                  }
                              }}
                              />
                    </Upper>
                    <Smallu>
                      <T  style={{padding:"0 0 0 1rem",margin:"0 0 1rem 0"}}>Cost</T>
                      <Hu style={{margin:"0"}} >.0420 eth</Hu>
                    </Smallu>
              </div>
              <Buttonu
               whileHover={{ scale: 1.1,boxShadow:"0 0 25px 	#000"}}
               whileTap={{ scale: 0.7 }}
                type="button"
              >
                Connect
              </Buttonu>
            </Rightu>
          </Flex>
          
         
        </Width>

            <ModeButton
                onChange={() => dispatch({ type: TOGGLE_DARKTHEME })}
                checked={darkThemeEnabled}
                size={80}
            />


           {/* <video autoPlay loop muted className="video">
            
             <source src={darkThemeEnabled? videoN : videoD} type="video/mp4"/> 
            </video> */}


          { showButton ? 
          
            <ShowButton
              type="button"
              to="home" spy={true} smooth={true}
             
            >
              <BsBoxArrowUp size="2rem"/>
            </ShowButton> :
            
            null
          }
            
            
        </HomePage>
    )
}

export default Home
