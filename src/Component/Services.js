import React  from 'react'
import styled from "styled-components"



const Services = () => {



    
    return (
        <Container id ="Services">
    <Wrapper >
  <Text>My Services</Text> 
 
 <Service>
   
  <One> 
    {/* <Icon/> */}
    <h2>Frontend Engineer</h2>
    <h4>I have the creative skill of interpreting UI/UX design
      very well and also adding life to the website.
      I create responsive frontends</h4>
  </One>
  <One> 
    {/* <Icon/> */}
    <h2>UI/UX</h2>
    <h4>We pay special attention to your work and 
      ensure we work 
      perfectly on the most unnoticed part of the site</h4>
  </One>
  <One> 
    {/* <Icon/> */}
    <h2>Creative Design</h2>
    <h4>We pay special attention to your work and 
      ensure we work 
      perfectly on the most unnoticed part of the site</h4>
  </One>
  <One> 
    {/* <Icon/> */}
    <h2>Backend</h2>
    <h4>We pay special attention to your work and 
      ensure we work 
      perfectly on the most unnoticed part of the site</h4>
  </One>
  </Service>

 </Wrapper>
       
        </Container>
    )
}

export default Services

const Container = styled.div`
width: 100%;
  min-height: 25rem;
flex-direction: column;
justify-content: center;
display:flex;
background-color:#031223;
align-items: center;
padding-bottom:30px;

@media screen and (min-width:320px) and (max-width:767px){
  min-height: 50rem;
}
@media screen  and (min-width:768px) and (max-width:1000px){
  min-height: 30rem; 
}
`
const Wrapper = styled.div`
position: absolute;
width: 90%;
height: 80%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

@media screen and (min-width:320px) and (max-width:768px){
  margin-top: -240px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
`
const Service = styled.div`
display: flex;
flex-wrap: wrap;
width: 100%;
align-items: center;
padding: 15px;
justify-content: space-around;
margin-top: 50px;


@media screen  and (min-width:800px) and (max-width:1000px){
    justify-content: space-between;
    width: 100%;

}

@media screen and (min-width:320px) and (max-width:768px){
  margin-top: 300px;


}
`
const One = styled.div`
margin-top: 10px;
height:150px;
width: 200px;
border-radius: 5px;
background-color:white;
color: black;
padding: 10px;
display: flex;
justify-content: center;
flex-direction: column;


h2{
  font-size:14px;
  font-weight: bold;
}

h4{
  font-size:14px;
  font-weight: lighter;
}

@media screen  and (min-width:800px) and (max-width:1000px){
    justify-content: space-between;
    width: 180px;
    padding: 10px;
   
}
`
const Text = styled.div`
font-size:13px;
font-weight: bold;
`

