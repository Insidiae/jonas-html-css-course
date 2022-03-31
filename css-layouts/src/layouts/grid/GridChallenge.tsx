import * as React from "react";
import styled from "styled-components";

export default function GridChallenge() {
  return (
    <Wrapper>
      <Product>
        <ProductTitle>Converse Chuck Taylor All Star Low Top</ProductTitle>
        <ProductImage
          src="https://i.imgur.com/ZrTU3VK.jpeg"
          alt="Chuck Taylor All Star Shoe"
          height="250"
          width="250"
        />

        <ProductInfo>
          <PriceWrapper>
            <Price>
              <strong>$65.00</strong>
            </Price>
            <Shipping>Free shipping</Shipping>
          </PriceWrapper>
          <Sale>Sale</Sale>

          <ProductDescription>
            Ready to dress up or down, these classic canvas Chucks are an
            everyday wardrobe staple.
          </ProductDescription>
          <MoreInfo href="https://converse.com" target="_blank">
            More information &rarr;
          </MoreInfo>

          <ColorOptions>
            <ColorOption></ColorOption>
            <ColorOption style={{ "--color": "#2f6ee2" }}></ColorOption>
            <ColorOption style={{ "--color": "#ec2f2f" }}></ColorOption>
            <ColorOption style={{ "--color": "#f0bf1e" }}></ColorOption>
            <ColorOption style={{ "--color": "#90cc20" }}></ColorOption>
            <ColorOption style={{ "--color": "#885214" }}></ColorOption>
          </ColorOptions>
        </ProductInfo>

        <ProductInfo>
          <DetailsTitle>Product details</DetailsTitle>
          <DetailsList>
            <li>Lightweight, durable canvas sneaker</li>
            <li>Lightly padded footbed for added comfort</li>
            <li>Iconic Chuck Taylor ankle patch.</li>
          </DetailsList>
        </ProductInfo>
        <AddToCart>Add to cart</AddToCart>
      </Product>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  font-family: sans-serif;
  line-height: 1.4;
`;

const Product = styled.article`
  border: 4px solid black;
  width: 825px;
  /* width: 1200px; */
  margin: 50px auto;
  position: relative;

  display: grid;
  grid-template-columns: 250px 1fr 1fr;
  column-gap: 40px;
`;

const ProductTitle = styled.h2`
  text-align: center;
  font-size: 22px;
  text-transform: uppercase;
  background-color: #f7f7f7;
  padding: 15px;

  grid-column: 1 / -1;
`;

const ProductImage = styled.img``;

const ProductInfo = styled.section`
  /* width: 243px; */
  flex: 1;
  margin-top: 20px;
`;

const PriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Price = styled.p`
  font-size: 24px;
`;

const Shipping = styled.p`
  font-size: 12px;
  text-transform: uppercase;
  font-weight: bold;
  color: #777;
`;

const Sale = styled.p`
  background-color: #ec2f2f;
  color: #fff;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 2px;
  padding: 7px 15px;
  display: inline-block;
  position: absolute;
  top: -17px;
  left: -38px;
`;

const ProductDescription = styled.p`
  margin-bottom: 10px;
`;

const MoreInfo = styled.a`
  &,
  &:link,
  &:visited {
    color: black;
    margin-bottom: 30px;
    display: inline-block;
  }

  &:hover,
  &:active {
    text-decoration: none;
  }
`;

const ColorOptions = styled.div`
  --color: #000;

  display: flex;
  gap: 10px;
`;

interface ColorProps {
  style?: { "--color": string };
}

const ColorOption = styled.div<ColorProps>`
  /* display: inline-block; */
  height: 22px;
  width: 22px;
  /* margin-right: 10px; */
  /* flex: 0 0 22px; */
  background-color: var(--color);
`;

const DetailsTitle = styled.h3`
  text-transform: uppercase;
  font-size: 16px;
  margin-bottom: 15px;
  /* margin-top: 30px; */
`;

const DetailsList = styled.ul`
  list-style: square;
  margin-left: 20px;

  & li {
    margin-bottom: 10px;
  }
`;

const AddToCart = styled.button`
  background-color: #000;
  border: none;
  color: #fff;
  font-size: 20px;
  text-transform: uppercase;
  cursor: pointer;
  padding: 15px;
  width: 100%;
  border-top: 4px solid black;

  grid-column: 1 / -1;

  &:hover {
    color: #000;
    background-color: #fff;
  }
`;
