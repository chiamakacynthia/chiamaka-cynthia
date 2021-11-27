import React from 'react'
import styled from "styled-components"
import {MdLocationOn, MdEmail} from "react-icons/md"
import {BsPhone} from "react-icons/bs"


const About = () => {

    return (
        <Container id="About">
            <Wrapper>
                <ImageHolder>
                    <Image src="images/pix.png"/>
                </ImageHolder>
                <Text>
                <h2>About me</h2>
          <h3> Chiamaka Cynthia Onyilimba</h3>
          <h5>
            I am a Frontend engineer and a UX designer, who based in lagos, Nigeria.  i am very passionate and deceited to my work. 
             with about two years experience as a fontend engineer and a UX designer, i have acquired the skills and experience needed to 
             build premium websit. i ensure the my websites are user friendly and fun.
            I develops, designs and build dynamic and creative websites, web app,
             user friendly interfaces. i am a graduate from the National Open University
            of Nigeria, were i earned a B.sc certificate in Computer Science.
            I have undergone several trainings in the quest of improving my
            skill set and knowledge, some of which are; Software engineering
            training at Codelab, google digital marketing, leadership training,
            Enterprenurship training at LBS, she is also a professional Fashion
            Designer.
          </h5>


<Contact> <Span>
           Location:
            <b> Olodi-Apapa, Lagos</b>
          </Span>
          <Span>
          Phone:
            <b> (+234) 081-8679-3482</b>
          </Span>
          <Span>
        Email:
            <b> Emmacynth@gmail.com</b>
          </Span>
          <Span>
        Freelance:
            <b> Available</b>
          </Span>
</Contact>
          <Button >Download CV</Button>
    </Text>
  
            </Wrapper>
        </Container>
    )
}

export default About

const Container = styled.div`
width: 100%;
min-height: 120%;
background-color:white;
display: flex;
justify-content: center ;
color: black;
/* padding-top: 50px; */
padding-bottom: 50px;
`;
const Wrapper = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
    justify-content: space-between;
    align-items: center;
  @media screen  and (min-width:800px) and (max-width:1000px){
    margin-top: 40px;
    justify-content: space-between;
    width: 90%;           
}
@media screen and (min-width:320px) and (max-width:768px){
    flex-direction: column;
    margin-top: 50px;
}
`
const ImageHolder = styled.div`
width: 320px;
height: 300px;
margin-bottom: 20px;

@media screen and (min-width:320px) and (max-width:768px){
  width: 260px;
}

@media screen and (min-width:800px) and (max-width:1000px){
  width: 260px;
}
`
const Image = styled.img`
width: 320px;
height: 400px;
object-fit: contain;
position: absolute;

@media screen and (min-width:320px) and (max-width:768px) {
  width: 250px;
margin-top: -00px;
}

@media screen and (min-width:800px) and (max-width:1000px){
  width: 260px;
}
`
const Text = styled.div`
width: 600px;
font-weight: normal;
display: flex;
flex-direction: column;

h5{
    font-weight: lighter;
    margin-top: -10px;
    letter-spacing: 1px;
    text-align: justify;
}
h3{
    font-weight: lighter;
    margin-top: -15px;
   
}

@media screen and (min-width:320px) and (max-width:768px){
width: 300px;
justify-content: center;
align-items: center;

}

@media screen and (min-width:800px) and (max-width:1000px){
  width: 400px;

}
`
const Contact = styled.div`
width: 400px;
display: flex;
border:  2px solid white;
flex-direction: column;
padding: 5px;


@media screen and (min-width:320px) and (max-width:768px){
width:80%;
justify-content: center;
align-items: center;
border:  2px solid white;
padding-left: 30px;
padding-right: 30px;
/* padding: 5px; */
}
`
const Span = styled.div`
  font-size: 15px;
  font-weight: bold;
  align-items: center;
 justify-content:space-between;
  display: flex;
  cursor: pointer;

  b{
  font-size: 14px;
  font-weight: normal;
  margin-top: 10px;
  margin-left:10px;
  text-align: left;
}

@media screen and (min-width:320px) and (max-width:768px){
width:300px;
justify-content: space-between;


}

`
const Button = styled.div`
width: 200px;
height: 40px;
font-size: 13px;
display: flex;
justify-content: center;
align-items: center;
color: white;
margin: 10px;
background-color:#031223;
border-radius: 5px;

:hover{
   background-color:  #B7904D;
   transform: scale(1.1);
  transition: 350ms;
 }

`
