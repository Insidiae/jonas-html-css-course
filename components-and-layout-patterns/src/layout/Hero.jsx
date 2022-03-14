import * as React from "react";
import styled from "styled-components";

export default function Hero() {
  return (
    <Wrapper>
      <Header>
        <Nav>
          <div>LOGO</div>
          <div>NAVIGATION</div>
        </Nav>

        <HeaderContentWrapper>
          <HeaderContent>
            <Title>
              A healthy meal delivered to your door, every single day
            </Title>
            <Text>
              The smart 365-days-per-year food subscription that will make you
              eat healthy again. Tailored to your personal tastes and
              nutritional needs
            </Text>
            <ButtonLink href="#">Start eating well</ButtonLink>
          </HeaderContent>
        </HeaderContentWrapper>
      </Header>

      <Section>
        <Container>
          <SectionHeading>Some random heading</SectionHeading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
            quas, minus beatae sapiente debitis voluptatum, laudantium veritatis
            impedit corrupti officia recusandae fugit, voluptates iure velit! Ad
            suscipit vitae nobis optio. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Reiciendis sequi quam earum voluptas eum
            laboriosam at cupiditate debitis in odio adipisci repudiandae enim
            ea, sint quos similique! Debitis, facilis dolore?
          </Text>
        </Container>
      </Section>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  color: hsl(0 0% 27%);
  font-family: "Rubik", sans-serif;
  line-height: normal;
`;

const Header = styled.header`
  position: relative;
  height: 100vh;
  color: hsl(0 0% 100%);
  background-image: linear-gradient(
      rgba(34, 34, 34, 0.6),
      rgba(34, 34, 34, 0.6)
    ),
    url(/assets/hero.jpg);
  background-size: cover;
`;

const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
`;

const Nav = styled(Container).attrs({
  as: "nav",
})`
  display: flex;
  justify-content: space-between;

  padding-top: 32px;
  font-size: 20px;
  font-weight: 700;
`;

const HeaderContentWrapper = styled.div`
  position: absolute;

  /* In relation to PARENT size */
  left: 50%;
  top: 50%;

  /* In relation to ELEMENT size */
  transform: translate(-50%, -50%);

  width: 1200px;
`;

const HeaderContent = styled.div`
  width: 50%;
`;

const Title = styled.h1`
  margin-bottom: 32px;
  font-size: 52px;
  line-height: 1.05;
`;

const Text = styled.p`
  margin-bottom: 48px;
  font-size: 20px;
  line-height: 1.6;
`;

const ButtonLink = styled.a`
  &,
  &:link,
  &:visited {
    display: inline-block;
    padding: 16px 32px;
    border-radius: 9px;
    color: hsl(0 0% 100%);
    font-size: 20px;
    font-weight: 600;
    text-decoration: none;
    background-color: hsl(28 80% 52%);
  }
`;

const Section = styled.section`
  padding: 96px 0;
  background-color: hsl(0 0% 97%);
`;

const SectionHeading = styled.h2`
  margin-bottom: 48px;
  font-size: 44px;
`;
