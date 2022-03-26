import * as React from "react";
import styled from "styled-components/macro";

export default function Testimonial() {
  return (
    <Wrapper>
      <Grid>
        <TestimonialImage
          src="img/customers.jpg"
          alt="People sitting on chairs"
        />
        <TestimonialWrapper>
          <TestimonialTitle>
            "We couldn't live without these chairs anymore"
          </TestimonialTitle>
          <TestimonialText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            repellat at, nesciunt quia cum minima ipsum culpa totam sapiente
            recusandae earum debitis doloribus in quasi voluptatibus!
          </TestimonialText>
          <TestimonialAuthor>&mdash; Mary and Sarah Johnson</TestimonialAuthor>
        </TestimonialWrapper>
      </Grid>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin-bottom: 48px;
  padding: 24px;
  border-radius: 36px;
  background-color: var(--color-primary);
  color: var(--color-white);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 80px;
`;

const TestimonialImage = styled.img`
  width: 100%;
  border-radius: 12px;
`;

const TestimonialWrapper = styled.div`
  grid-column: 2 / -1;
  align-self: center;
`;

const TestimonialTitle = styled.h2`
  margin-bottom: 24px;
  font-size: ${24 / 16}rem;
  letter-spacing: -0.5px;
`;

const TestimonialText = styled.blockquote`
  margin-bottom: 24px;
  font-size: ${18 / 16}rem;
  font-style: italic;
  line-height: 1.7;
`;

const TestimonialAuthor = styled.p``;
