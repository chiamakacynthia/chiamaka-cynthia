import React from 'react'
import styled from "styled-components"


const Project = () => {
    return (
        <Container id ="Project">
        <Wrapper src="images/pen.jpg" />
<Text>My Projects Done</Text>
<Card>
    <Img src="images/a1.jpg"/>
    <Tex>
        <PA>Project Name: <span>Plural sight</span> </PA>
        {/* <PA>Project Type: <span>development</span> </PA> */}
        {/* <PA>My Role:  <span>Frontened development</span> </PA> */}
        <PA>Project Date:  <span>September, 2021</span> </PA>
        <PA>Description:  <span>Replication of major paages from plural sight, including, the complex header</span> </PA>
        <Button>View</Button>
    </Tex>
</Card>
    </Container>
    )
}

export default Project

const Container = styled.div`
 width: 100%;
  min-height: 42rem;
  display: flex;
  flex-direction: column;
  background-color:whitesmoke;
  position: relative;
  justify-content: space-around;
  align-items: center; 
`
const Wrapper = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
position: absolute;
z-index: -1;
`
const Text = styled.div`
width: 100%;
/* height: 100px; */
display: flex;
justify-content: center;
align-items: center;
font-size: 20px;
font-weight: bold;
color: black;
margin-top:-150px;

`
 const Card = styled.div`
 width: 400px;
 min-height: 250px;
 border-radius: 3px;
 padding: 10px;
 background-color:#031223;
 color:white;
 display: flex;
 align-items:center;
 margin-top:-350px;
 box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
 box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
 

 @media screen and (min-width:320px) and (max-width:768px){
 width: 280px;
 min-height: 350px;
 border-radius: 10px;
 padding: 10px;
 flex-direction: column;
 display: flex;
}
 `
 const Img = styled.img`
  width: 40%;
  height:230px;
  border-radius: 3px;
  object-fit: cover;

  @media screen and (min-width:320px) and (max-width:768px){
    width: 95%;
    height:200px;
}
 `
 const Tex = styled.div`
  width: 95%;
  height: 100%;
  border-radius: 10px, 10px, 0, 0;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  margin-left: 10px;
 `
 const PA = styled.div`
 font-size: 13px;
font-weight: normal;
margin-top:5px;
text-align: justify;
span{
    font-size: 12px;
font-weight: lighter;
margin-left: 10px;

}
 `
 const Button = styled.button`
 width: 200px;
 height: 40px;
 font-size: 13px;
 color: black;
 font-weight: bold;
 outline: none;
 border: none;
 margin: 10px;
 background-color: white;
 border-radius: 5px;
  
 &:hover{
     cursor: pointer;
     background-color:  whitesmoke;
     transform: scale(1.1);
    transition: 350ms;
 }

 @media screen and (min-width:320px) and (max-width:768px){
    margin-left: 70px;
    margin-top: 10px;
    width: 130px;
}
 `