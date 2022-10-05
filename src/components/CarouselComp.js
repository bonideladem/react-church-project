import React from 'react';
import { Carousel } from 'react-bootstrap'

export default function CarouselComp() {
  return (
      <div>
          <Carousel>
              <Carousel.Item>
                  <img
                      className="d-block w-100"
                      src={require("../images/Dela.jpg")}
                      alt="First slide"
                  />
                  <Carousel.Caption>
                      <h3>First slide label</h3>
                      <p>
                          Nulla vitae elit libero, a pharetra augue mollis
                          interdum.
                      </p>
                  </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                  <img
                      className="d-block w-100"
                      src={require("../images/CHARLES AND DELA PIC.png")}
                      alt="Second slide"
                  />

                  <Carousel.Caption>
                      <h3>Second slide label</h3>
                      <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                      </p>
                  </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                  <img
                      className="d-block w-100"
                      src={require("../images/bridget and yaa PIC.png")}
                      alt="Third slide"
                  />

                  <Carousel.Caption>
                      <h3>Third slide label</h3>
                      <p>
                          Praesent commodo cursus magna, vel scelerisque nisl
                          consectetur.
                      </p>
                  </Carousel.Caption>
              </Carousel.Item>
          </Carousel>
      </div>
  );
}
