import React from 'react'
import styled from "styled-components"
import { animateScroll as scroll, Link } from "react-scroll";
import {
    FaFacebookSquare,
    FaLinkedin,
    FaTwitter,
    FaGithub,
  } from "react-icons/fa";

const Footer = () => {
    return (
        <Container id ="Footer">
        {/* <Wrapper src="images/a2.jpg" /> */}
       <Up>
       <Icons>
          <a href="https://web.facebook.com/onyilimba.cynthia">  <Icons1 /> </a>
           <a href="linkedin.com/in/chiamaka-onyilimba-699b4b168"> <Icons2 /> </a>
           <a href="https://www.instagram.com/ceezfashion/"> <Icons3 />  </a>
           <a href="https://github.com/chiamakacynthia/"> <Icons4 />  </a>
</Icons> 

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
        </Head>

        <ReachOut>
  <Mess>Send Me A Message</Mess>
  <Input placeholder="Name" type="text" />
  <Input placeholder="Phone" />
  <Input2 type="text" placeholder="Write your message" />
  <Button>Submit</Button>
        </ReachOut>

</Up>

<Down>Designed&DevelopedbyCeeCreativeTech@2021</Down>
    </Container>
    )
}

export default Footer

const ReachOut = styled.div`
width:400px; 
height: 270px;
display: flex;
flex-direction: column;
justify-content: space-around;


@media screen and (max-width:768px){
    width: 200px;
    margin-right: 20px;
  }
`
const Input = styled.input`
width: 280px; 
height: 30px;
border-radius: 3px;
border: 1px solid white;
background-color:transparent;
color: white;
margin-top:5px;
@media screen and (max-width:768px){
    width: 200px;
  }
`
const Button = styled.button`
font-size: 12px;
font-weight: bold;
width: 70px;
height: 30px;
color:#031223;
outline: none;
border: white;
border-radius: 3px;
cursor: pointer;
&:hover{
transition: 350ms;
transform: scale(1.1);
}
`
const Input2 = styled.textarea`
width: 280px; 
height: 100px;
border-radius: 3px;
border: 1px solid white;
background-color:transparent;
color: white;

@media screen and (max-width:768px){
    width: 200px;
    height: 70px;
  }
`
const Mess = styled.div`
font-size: 12px;
font-weight: bold;
`
const Container = styled.div`
 width: 100%;
  height: 20rem;
  display: flex;
  position: relative;
  flex-direction:column;
  background-color:#031223;
  justify-content: space-around;
  align-items: center; 

  @media screen and (min-width:320px) and (max-width:768px){
    height: 20rem;
}
`
const Up = styled.div`
 width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
const Down = styled.div`
font-size: 11px;
color: #140605;
background-color: white;
display: flex;
  justify-content:center;
  padding-top: 5px;
  padding-bottom: 5px;
width: 100%;
`
const Head = styled.div`
  width: 350px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;

  span {
    font-size: 13px;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
    &:hover{
      color: goldenrod;
      transition: 350ms;
    }
  }

  @media screen and (max-width:768px){
    height: 60%;
    display: flex;
  flex-direction: column;
  position: relative;
  justify-content: space-between;
  align-items: center;
  }
  @media screen and (min-width:320px) and (max-width:570px){
 display: none;
}
`;
const Icons = styled.div`
width: 270px;
height: 40px;
display: flex;
align-items: center;
justify-content: space-around;


@media screen and (max-width:768px){
  margin-top: 10px;
  flex-direction: column;
  height: 180px;
}
`
const Icons1 = styled(FaFacebookSquare)`
 font-size: 25px;
 font-weight: bold;
    color: white;
    margin-left: 10px;
    margin-top: 10px;
    box-shadow: rgb(0 0 0/78%) 10px 20px 50px -10px; 

    &:hover{
    transition: 0.5s;
    transform: scale(1.3);
    color: blue;
    cursor: pointer;
}
`;
const Icons2 = styled(FaLinkedin)`
 font-size: 25px;
 font-weight: bold;
    margin-left: 10px;
    margin-top: 10px;
    color: white;
    box-shadow: rgb(0 0 0/78%) 10px 20px 50px -10px; 

    &:hover{
    transition: 0.5s;
    transform: scale(1.3);
    color: navy;
    cursor: pointer;
}
`;
const Icons3 = styled(FaTwitter)`
   color: #333ede;
   font-size: 25px;
 font-weight: bold;
    margin-left: 10px;
    margin-top: 10px;
    color: white;
    box-shadow: rgb(0 0 0/78%) 10px 20px 50px -10px; 

    &:hover{
    transition: 0.5s;
    transform: scale(1.3);
    color: blue;
    cursor: pointer;
}
`;
const Icons4 = styled(FaGithub)`
  font-size: 25px;
 font-weight: bold;
    margin-left: 10px;
    margin-top: 10px;
    color: white;
    box-shadow: rgb(0 0 0/78%) 10px 20px 50px -10px; 

    &:hover{
    transition: 0.5s;
    transform: scale(1.3);
    color: orange;
    cursor: pointer;
}
`;