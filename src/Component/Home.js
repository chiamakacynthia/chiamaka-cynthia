import React from 'react'
import styled from "styled-components"
import ReactTypingEffect from 'react-typing-effect';
import {
    FaFacebookSquare,
    FaLinkedin,
    FaInstagram,
    FaGithub,
  } from "react-icons/fa";

const Home = () => {

    return (
        <Container id ="Home">
            <Wrapper src="images/whitebg.jpg" />
<Wrap>
<Image src ="images/e2.png" />
<Text>
<h2>Ceez Creative designs and development</h2>
    <h3> we make your business look great!</h3>
     <h5>
<ReactTypingEffect
        text={["I am dev. Chiamaka,", " a creative UX/UI designer", "A Frontend engineer",
         "A backend developer", "A fashion designer", "a Travel & Tour lover"]}

        cursorRenderer={cursor => <h1>{cursor}</h1>}
        displayTextRenderer={(text, i) => {
          return (
            <h5>
              {text.split('').map((char, i) => {
                const key = `${i}`;
                return (
                  <span
                    key={key}
                    style={i%2 === 0 ? { color: 'white'} : {color: 'white'}}
                  >{char}</span>
                );
              })}
            </h5>
          );
        }}        
      />
      </h5>
   
</Text>

<Icons>
          <a href="https://web.facebook.com/onyilimba.cynthia">  <Icons1 /> </a>
           <a href="linkedin.com/in/chiamaka-onyilimba-699b4b168"> <Icons2 /> </a>
           <a href="https://www.instagram.com/ceezfashion/"> <Icons3 />  </a>
           <a href="https://github.com/chiamakacynthia/"> <Icons4 />  </a>
</Icons>  
</Wrap>
         
  
        </Container>
    )
}

export default Home

const Container = styled.div`
 width: 100%;
  height: 42rem;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: space-between;
  align-items: center; 
`
const Wrapper = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
position: absolute;
z-index: -1;
opacity: 0.4;
`
const Wrap = styled.div`
/* width: 80%; */
height: 100%;
  display: flex;
  flex-direction: column;
  /* background-color: red; */
  align-items: center;
  padding: 20px;

  @media screen and (min-width:320px) and (max-width:768px){
  width: 240px;
  }
`

const Text = styled.div`
width: 450px;
height: 50%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
color: black;
text-align: center;
margin-top: 100px;
@media screen and (max-width:768px){
    width: 280px;
    margin-top: 90px;
}

h3{
    font-size: 30px;
    font-weight: bolder;
    color: white;
    margin-top: 0px;
    text-align: center;
}
h5{
    font-size: 15px;
    font-weight: normal;
    color: white;
    margin-top: -40px;
    text-align: center;
    /* margin-bottom: -30px; */
}
h2{
    font-size: 15px;
    letter-spacing: 2.7px;
    margin-top: 10px;
    text-align: center;
    font-weight: lighter;  


    @media screen and (max-width:768px){
  margin-top: 30px;
}
}
`
const Image = styled.img`
width:200px;
height: 200px;
border-radius: 100px;
object-fit: cover;
position: relative;
margin-top:-30px;
left: 20;
top:100px;
border: 2px solid white;


@media screen and (max-width:768px){
    width: 130px;
    height: 130px;
border-radius: 75px;
/* margin-bottom: -80px; */
border: 2px solid white;
}
`
const Icons = styled.div`
width: 270px;
height: 40px;
margin-top: -75px;
display: flex;
align-items: center;
justify-content: space-around;


@media screen and (max-width:768px){
  margin-top: -30px;
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
const Icons3 = styled(FaInstagram)`
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