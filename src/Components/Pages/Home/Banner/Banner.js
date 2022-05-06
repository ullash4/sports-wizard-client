import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            <Carousel variant="dark">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/prngGfn/All-jersey-Collections.png"
      alt="First slide"
    />
    <Carousel.Caption>
      <h5>All Jersey Collections</h5>
      <p>We stock jersey collections</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/RvfTXWD/All-jersey-Collections-2.png"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h5>All Game Equipments Collections</h5>
      <p>We stock game equipments collections</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/fDGYkR2/All-jersey-Collections-1.png"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h5>All Cricket Collections</h5>
      <p>We stock cricket collections</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;