import * as React from "react";
import SliderBase from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { colors } from "../constants";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

function TestimonialCarousel({ children }) {
  return <Slider {...settings}>{children}</Slider>;
}

const Slider = styled(SliderBase)`
  width: 800px;

  /* Override slick-carousel styles */
  .slick-prev,
  .slick-next {
    width: 32px;
    height: 32px;
  }

  .slick-prev {
    left: -40px;
  }
  .slick-next {
    right: -40px;
  }

  .slick-prev:before,
  .slick-next:before {
    font-size: 32px;
    color: ${colors.primary};
  }
`;

const Testimonial = styled.div`
  /* 
    We need to override the display: inline-block
    which is set by slick-carousel.
  */
  display: flex !important;
  align-items: center;
  gap: 86px;

  margin: 48px auto;
  padding: 32px 48px 32px 86px;
  background-color: ${(props) => props.backgroundColor || colors.primary};
`;

const Image = styled.img`
  height: 200px;
  border-radius: 8px;
  transform: scale(1.5);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.25);
`;

const QuoteWrapper = styled.blockquote``;

const Quote = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.5;
  margin-bottom: 32px;
  color: ${colors.white};
`;
const AuthorName = styled.p`
  font-size: 14px;
  margin-bottom: 4px;
  color: ${colors.secondary};
`;
const AuthorPosition = styled.p`
  font-size: 12px;
  color: ${colors.secondary};
`;

export {
  TestimonialCarousel,
  Testimonial,
  Image,
  QuoteWrapper,
  Quote,
  AuthorName,
  AuthorPosition,
};
