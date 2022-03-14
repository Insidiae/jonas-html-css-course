import * as React from "react";
import styled from "styled-components";

import {
  TestimonialCarousel as Carousel,
  Testimonial,
  Image,
  QuoteWrapper,
  Quote,
  AuthorName,
  AuthorPosition,
} from "../components/TestimonialCarousel";

export default function CarouselDemo() {
  return (
    <Wrapper>
      <Carousel>
        <Testimonial>
          <Image src="/assets/maria.jpg" alt="Maria de Almeida" />
          <QuoteWrapper>
            <Quote>
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
              nesciunt aliquid ex atque quibusdam. Rerum officia unde suscipit
              quo sunt hic illo fugit."
            </Quote>
            <AuthorName>Maria de Almeida</AuthorName>
            <AuthorPosition>
              Senior Product Manager at EDP Comercial
            </AuthorPosition>
          </QuoteWrapper>
        </Testimonial>
        <Testimonial backgroundColor="hsl(202 88% 26%)">
          <Image src="/assets/maria.jpg" alt="Maria de Almeida" />
          <QuoteWrapper>
            <Quote>
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
              nesciunt aliquid ex atque quibusdam. Rerum officia unde suscipit
              quo sunt hic illo fugit."
            </Quote>
            <AuthorName>Maria de Almeida</AuthorName>
            <AuthorPosition>
              Senior Product Manager at EDP Comercial
            </AuthorPosition>
          </QuoteWrapper>
        </Testimonial>
        <Testimonial>
          <Image src="/assets/maria.jpg" alt="Maria de Almeida" />
          <QuoteWrapper>
            <Quote>
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
              nesciunt aliquid ex atque quibusdam. Rerum officia unde suscipit
              quo sunt hic illo fugit."
            </Quote>
            <AuthorName>Maria de Almeida</AuthorName>
            <AuthorPosition>
              Senior Product Manager at EDP Comercial
            </AuthorPosition>
          </QuoteWrapper>
        </Testimonial>
        <Testimonial>
          <Image src="/assets/maria.jpg" alt="Maria de Almeida" />
          <QuoteWrapper>
            <Quote>
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
              nesciunt aliquid ex atque quibusdam. Rerum officia unde suscipit
              quo sunt hic illo fugit."
            </Quote>
            <AuthorName>Maria de Almeida</AuthorName>
            <AuthorPosition>
              Senior Product Manager at EDP Comercial
            </AuthorPosition>
          </QuoteWrapper>
        </Testimonial>
      </Carousel>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
`;
