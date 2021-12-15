import React,{ useState } from 'react'
import styled from 'styled-components'
import img from '../../components/Navbar/logo.png'
import Tilt from 'react-parallax-tilt';
import theme from "styled-theming";
// import tank from './tank.png'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { SiHomeassistant } from 'react-icons/si';
import { IoIosPodium } from 'react-icons/io';
import { SiAzuredataexplorer } from 'react-icons/si';
import { SiZig } from 'react-icons/si'
import DarkModeToggle from "react-dark-mode-toggle";
import { useSelector, useDispatch } from "react-redux";
import { TOGGLE_DARKTHEME } from "../../redux/actions";
import bgg from '../Page7/day.gif'
import nbgg from '../Page7/night.gif'

const backgroundImagePage7 = theme("theme", {
    light: bgg,
    dark: nbgg,
  });  

const iconColor = theme("theme", {
    light: "linear-gradient(to right, #0f0c29, #302b63, #24243e)",
    dark: "linear-gradient(to right, #fc00ff, #00dbde)",
  }); 

const Sec = styled.section`
    min-height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8rem  0;
    background-image: url(${backgroundImagePage7});
    background-repeat: no-repeat;
   
    background-size: 150% 100%;
    background-position: right bottom !important;
  
    @media only screen and (max-width: 768px) {
        width: 100%;
        padding: 1rem 0 2rem 0;
        flex-direction: column;
        justify-content: space-around;
      }
`;

const T = styled.p`
    color: #FFFFFF;
    font-weight: 500;
    font-size: 1.3rem;
    
    @media only screen and (max-width: 768px) {
        font-weight: 510;
        font-size: 1rem;
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

const Roadmap2 = () => {

    const dispatch = useDispatch();
    const darkThemeEnabled = useSelector((state) => state.preferences.darkThemeEnabled);
  
    return (
        <Sec id="learn">
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#03157f', color: '#FFF' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="Phase 01"
                    iconStyle={{ background: '#000', color: '#fff' }}
                    icon={<SiHomeassistant />}
                >
                    {/* <h3 className="vertical-timeline-element-title">0%</h3> */}
                    <h4 style={{fontSize:"1.4rem"}} className="vertical-timeline-element-subtitle">10%</h4>
                    <T>
                    Random community giveaways/contests/airdrops started
                    </T>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#03157f', color: '#FFF' }}
                    date="Phase 02"
                    iconStyle={{ background: '#FFBF00', color: '#fff' }}
                    icon={<IoIosPodium />}
                >
                    <h3 className="vertical-timeline-element-title"></h3>
                    <h4 style={{fontSize:"1.4rem"}} className="vertical-timeline-element-subtitle">25%</h4>
                    <T>
                    Community Roadmap Voting Initiated

                    </T>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#03157f', color: '#FFF' }}
                    date="Phase 03"
                    iconStyle={{ background: '#FFBF00', color: '#000000' }}
                    icon={<SiAzuredataexplorer />}
                >
                    <h3 className="vertical-timeline-element-title"></h3>
                    <h4 style={{fontSize:"1.4rem"}} className="vertical-timeline-element-subtitle">50%</h4>
                    <T>
                    Community merch launched with exclusive gear for holders

                    </T>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#03157f', color: '#FFF' }}
                    date="Phase 04"
                    iconStyle={{ background: '#FFBF00', color: '#fff' }}
                    icon={<SiZig />}
                >
                    <h3 className="vertical-timeline-element-title"></h3>
                    <h4 style={{fontSize:"1.4rem"}} className="vertical-timeline-element-subtitle">75% </h4>
                    <T>
                    Donations to community voted aquariums/sea clean up organizations

                    </T>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#03157f', color: '#FFF' }}
                    date="Phase 05"
                    iconStyle={{ background: '	#228B22', color: '#000000' }}
                    icon={<SiZig />}
                >
                    <h3 className="vertical-timeline-element-title"></h3>
                    <h4 style={{fontSize:"1.4rem"}} className="vertical-timeline-element-subtitle">100%</h4>
                    <T>
                    Super Secret Project Revealed  
                    </T>
                </VerticalTimelineElement>
              </VerticalTimeline>

              <ModeButton
                onChange={() => dispatch({ type: TOGGLE_DARKTHEME })}
                checked={darkThemeEnabled}
                size={80}
            />

        </Sec>
    )
}

export default Roadmap2
