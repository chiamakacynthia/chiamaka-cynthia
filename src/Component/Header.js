import Sidebar from './Sidebar'
import React,{useState} from "react";
import styled from "styled-components";
import { animateScroll as scroll, Link } from "react-scroll";
import {HiMenuAlt1} from "react-icons/hi"
import {GiCancel} from "react-icons/gi"
import Fade from 'react-reveal/Fade';



const Header = () => {

const [toggle, setToggle] = useState(false)

const onToggle = ()=>{
    setToggle(!toggle)
}

    return (
      <Container>
        <Mylogo>
          <Logo
            onClick={() => {
              scroll.scrollToTop();
            }}
            src="images/Logo.png"
          />
        </Mylogo>
  
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
        </Head>
        
        <MyMenu>
   {toggle ? (
         <Cancel onClick={onToggle}/>
       ) :(
        <MenuIcon onClick={onToggle}/>
       )}
</MyMenu>
        
        {
          toggle ?  
          <Sidebar toggle={toggle}/>
        : null
        }

      </Container>
    );
  };
  export default Header;

const Container = styled.div`
  width: 100%;
  height: 70px;
  position: fixed;
  color: white;
  align-items: center;
  display: flex;
  justify-content: space-between;
  background: rgba(0f1348);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(7.5px);
  -webkit-backdrop-filter: blur(7.5px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  z-index: 1;
`;
const Mylogo = styled.div`
display: flex;
flex: 1;
`;
const Logo = styled.img`
  width: 100px;
  height: 70px;
  object-fit: contain;
  margin-top: 5px;
  margin-left: 40px;

`;
const Head = styled.div`
  width: 650px;
  display: flex;
  flex-wrap: wrap;
  //background: green;
  align-items: center;
  cursor: pointer;
 

  span {
    font-size: 13px;
    font-weight: bold;
    text-transform: uppercase;
    margin-left: 50px;
    cursor: pointer;
  }

  @media screen and (min-width:320px) and (max-width:767px){
display: none;
}
`;
const MyMenu = styled.div`
width: 100px;
height: 40px;
display: flex;
align-items: center;
border-radius: 5px;
justify-content: center;
cursor: pointer;

@media screen and (min-width: 760px){
    display: none
}
`
const MenuIcon= styled(HiMenuAlt1)`
font-size: 40px;
font-weight: bold;
`
const Cancel= styled(GiCancel)`
font-size: 40px;
font-weight: bold;
`