import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import './App.css';




export default function Home() {
  return (
    <div>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://themewagon.github.io/foody2/img/carousel-2.jpg"
          alt="Slide 1"
        />
        <Carousel.Caption>
          <h3>Be Organic</h3>
     
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://themewagon.github.io/foody2/img/carousel-1.jpg"
          alt="Slide 2"
        />
        <Carousel.Caption>
          <h3>Natural Food Is Always Healthy</h3>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://themewagon.github.io/foody2/img/carousel-2.jpg"
          alt="Slide 3"
        />
        <Carousel.Caption>
          <h3>Slide 3</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

  
   
    </div>
  );
}
