
import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import { animateScroll as scroll, Link } from "react-scroll";

const Sidebar = ({toggle}) => {

  return (
    <Container>
       
     {toggle?  <Fade left  ><Wrapper>
       <Head>
       <Link
             offset={-70}
             activeClass="active"
             to="Home"
             smooth={true}
             duration={1000}
           >
             <span>Home</span>
           </Link>
           <Link
             offset={-70}
             activeClass="active"
             to="About"
             smooth={true}
             duration={1000}
           >
             <span>About</span>
           </Link>
           <Link
             offset={-70}
             activeClass="active"
             to="Services"
            smooth={true}
            duration={1000}
           >
             <span>Services</span>
           </Link>
           <Link
            offset={-70}
             activeClass="active"
             to="Project"
            smooth={true}
            duration={1000}
           >
             <span>Projects</span>
           </Link>
           <Link
            offset={-70}
             activeClass="active"
             to="Footer"
            smooth={true}
            duration={1000}
           >
             <span>Footer</span>
           </Link>
         </Head></Wrapper></Fade>: null}
    </Container>
  )
}

export default Sidebar

const Container = styled.div`
  position: absolute;
  z-index: 1000;
  top: 0;
  left: 0;
  width: auto;
  height: auto;
  margin-top: 70px;
  
`
const Wrapper = styled.div`
  width: 300px;
  height: 90vh;
  background:#031223;
`
 const Head = styled.div`
   width: 200px;
   height: 250px;
   display: flex;
   flex-wrap: wrap;
   flex-direction: column;
   color: white;
   justify-content: space-around;
   cursor: pointer;

 

   span {
     font-size: 13px;
     font-weight: bold;
     text-transform: uppercase;
     color: white;
     margin-left: 50px;
     cursor: pointer;

     &:hover{
       color: goldenrod;
       transition: 350ms;
     }
   }
 `;