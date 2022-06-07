import React from "react";

import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { sliderItems } from "./data";
import { mobile } from "./responsive";
import "./index.css";
const Container = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })}
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  width:100%
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  align-items: center;
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;
// background-image: url("https://images-eu.ssl-images-amazon.com/images/G/31/img22/OP/BTS/V2/D22170942_IN_OP_School_from_home_Apr21_3000x1200._CB636844586_.jpg");
const SliderImageContainer = styled.div`
  background: url(${(props) => props.imageSrc}) no-repeat top center;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  margin-left: auto;
`;

const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: 1,
      title: "First Slide",
      link: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2022/BAU/ATFGW/Summer_store_Unrec_BS_3000x1200._CB635605102_.jpg",
    },
    {
      id: 2,
      title: "Second Slide",
      link: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/OP/BTS/V2/D22170942_IN_OP_School_from_home_Apr21_3000x1200._CB636844586_.jpg",
    },
    {
      id: 3,
      title: "Third Slide",
      link: "https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/U599/MAY22/kotak/MA_3000._CB635561646_.jpg",
    },
    {
      id: 4,
      title: "Fourth Slide",
      link: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2022/BAU/ATFGW/3000x1200_light_solutions_postpe_WC._CB635819570_.jpg",
    },
  ];
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prev) => {
        return prev + 1 === slides.length ? 0 : prev + 1;
      });
    }, 2500);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const slideNext = (e) => {
    setCurrentSlide((prev) => {
      return prev + 1 === slides.length ? 0 : currentSlide + 1;
    });
  };
  const slidePrev = (e) => {
    setCurrentSlide((prev) => {
      return prev === 0 ? slides.length - 1 : currentSlide - 1;
    });
  };
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Container>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide key={item.id}>
            <SliderImageContainer
              imageSrc={slides[currentSlide].link}
            ></SliderImageContainer>
          </Slide>
        ))}
      </Wrapper>
    </Container>
  );
}
