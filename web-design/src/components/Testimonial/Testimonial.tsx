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
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 80px;
`;

const TestimonialImage = styled.img`
  width: 100%;
`;

const TestimonialWrapper = styled.div`
  grid-column: 2 / -1;
  align-self: center;
`;

const TestimonialTitle = styled.h2`
  margin-bottom: 24px;
`;

const TestimonialText = styled.blockquote`
  font-style: italic;
  margin-bottom: 24px;
`;

const TestimonialAuthor = styled.p``;
