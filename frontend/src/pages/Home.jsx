import React from 'react'
import '../styles/home.css';

import { container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';

const Home = () => {
  return (
    <>

      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className='hero__content'>
                <div className='hero__subtitle d-flex align-items-center'>
                  <Subtitle  subtitle={'Know Before you Go'}/>
                  <img src={worldImg} alt="" />
                </div>
                <h1>
                  Travelling opens the door is creating{" "}
                  <span className='highlight'>memories</span>
                </h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

    </>
  )
}

export default Home