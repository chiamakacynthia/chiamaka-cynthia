import React from 'react'
import { Bar } from 'react-chartjs-2'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel} from 'react-responsive-carousel';
import styled from "styled-components"

const Skill = () => {

      
  const options = {
    indexAxis: 'y',
    // Elements options apply to all of the options unless overridden in a dataset
    // In this case, we are setting the border of each horizontal bar to be 2px wide
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: true,
        text: 'My Skill Set and Rating',
      },
    },
  };
    return (
        <Container>
            <Wrapper>
                <Text> My Skills</Text>
    <Hold>
  <Wrap>
  <Carousel showArrows={true} infiniteLoop useKeyboardArrows autoPlay>
                <div>
                    <Img src="images/js_logo.png" />
                    <p className="legend">JavaScript</p>
                </div>
                <div>
                    <Img src="images/Node_logo.png" />
                    <p className="legend">Node JS</p>
                </div>
                <div>
                    <Img src="images/xd.png" />
                    <p className="legend">XD</p>
                </div>
                <div>
                    <Img src="images/css_logo.png" />
                    <p className="legend">Cascading style sheet</p>
                </div>
                <div>
                    <Img src="images/figma_logo.png" />
                    <p className="legend">Figma</p>
                </div>
                <div>
                    <Img src="images/firebase_logo.png" />
                    <p className="legend">Firebase</p>
                </div>
                <div>
                    <Img src="images/heroku_logo.png" />
                    <p className="legend">Heroku</p>
                </div>
                <div>
                    <Img src="images/html_logo.jpg" />
                    <p className="legend">Html</p>
                </div>
                <div>
                    <Img src="images/mdb.png" />
                    <p className="legend">Mongo database</p>
                </div>
                <div>
                    <Img src="images/react-logo.png" />
                    <p className="legend">React JS</p>
                </div>
  </Carousel>
 
   </Wrap>
 <Skillz>


          <Bar data={{ 
        labels: ['UX/UI', 'Frontend', "Backend","fashion design" ],
        datasets: [
          {
             label: 'Rating 100%',
             data: [70, 60, 40, 90],
            backgroundColor: [
              'rgba(255, 255, 8, 0.4)',
              'rgba(54, 162, 235, 0.4)',
              'rgba(18, 80, 75, 0.4)',
              'rgba(226, 63, 64, 0.4)',
              
            ],
            borderColor: [
              'rgba(255, 255, 8, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(18, 80, 75, 1)',
              'rgba(226, 63, 64, 1)',
              
            ],
            borderWidth: 1,
          },
        ],
      }} 
      options={options} 
      />
         
</Skillz>
</Hold>

            </Wrapper>
        </Container>
    )
}

export default Skill

const Container = styled.div`
width: 100%;
  min-height: 47rem;
justify-content: center;
display:flex;
background-color:#031223;
align-items: center;
padding-bottom:30px;

@media screen and (min-width:320px) and (max-width:767px){
  min-height: 40rem;
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
  /* margin-top: -240px; */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
`

const Img = styled.img`
width: 200px;
height: 200px;
object-fit: contain;
border-radius: 10px;
`
const Text = styled.div`
font-size:13px;
font-weight: bold;
padding-bottom: 20px;
`
const Skillz = styled.div`
  width: 400px;
  height: 200px;
  box-sizing: content-box;
  color: white;
/* background-color:white; */

@media screen and (min-width:320px) and (max-width:768px){
  width: 280px;
    display: flex;
    justify-content: center;
    align-items: center;  
}
 
`;
const Wrap = styled.div`
  display: flex;
    justify-content: center;
    align-items: center;
width: 400px; 
height: 200px;
margin-bottom: 20px;
/* background-color:#e1c1b0; */
margin-top: 30px;

@media screen and (min-width:320px) and (max-width:768px){
  /* margin-top: 300px; */
  width: 300px;
  height: 300px;
}

@media screen  and (min-width:800px) and (max-width:1000px){
  width: 270px;
  height: 300px;
}
`

const Hold = styled.div`
display: flex;
width: 90%;
justify-content: space-between;


@media screen and (min-width:320px) and (max-width:768px){
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
`