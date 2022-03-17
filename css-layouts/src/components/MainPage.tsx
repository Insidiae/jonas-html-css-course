import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function MainPage() {
  return (
    <Wrapper>
      <Container>
        <MainHeader>
          <Title>📘 The Code Magazine</Title>

          <Nav>
            <NavLink to="/">Blog</NavLink>{" "}
            <NavLink to="challenges">Challenges</NavLink>{" "}
            <NavLink to="/flexbox">Flexbox</NavLink>{" "}
            <NavLink to="/">CSS Grid</NavLink>
          </Nav>
        </MainHeader>

        <PostWrapper>
          <PostHeader>
            <PostTitle>The Basic Language of the Web: HTML</PostTitle>

            <AuthorImg
              src="img/laura-jones.jpg"
              alt="Headshot of Laura Jones"
              height="50"
              width="50"
            />

            <AuthorInfo>
              Posted by <strong>Laura Jones</strong> on Monday, June 21st 2027
            </AuthorInfo>

            <PostImg
              src="img/post-img.jpg"
              alt="HTML code on a screen"
              width="500"
              height="200"
              className="post-img"
            />
            <LikeButton>❤️ Like</LikeButton>
          </PostHeader>

          <Paragraph>
            All modern websites and web applications are built using three{" "}
            <em>fundamental</em> technologies: HTML, CSS and JavaScript. These
            are the languages of the web.
          </Paragraph>

          <Paragraph>
            In this post, let's focus on HTML. We will learn what HTML is all
            about, and why you too should learn it.
          </Paragraph>

          <SectionTitle>What is HTML?</SectionTitle>
          <Paragraph>
            HTML stands for <strong>H</strong>yper<strong>T</strong>ext{" "}
            <strong>M</strong>arkup <strong>L</strong>anguage. It's a markup
            language that web developers use to structure and describe the
            content of a webpage (not a programming language).
          </Paragraph>
          <Paragraph>
            HTML consists of elements that describe different types of content:
            paragraphs, links, headings, images, video, etc. Web browsers
            understand HTML and render HTML code as websites.
          </Paragraph>
          <Paragraph>In HTML, each element is made up of 3 parts:</Paragraph>

          <List as="ol">
            <ListItem>The opening tag</ListItem>
            <ListItem>The closing tag</ListItem>
            <ListItem>The actual element</ListItem>
          </List>

          <Paragraph>
            You can learn more at{" "}
            <PostLink
              href="https://developer.mozilla.org/en-US/docs/Web/HTML"
              target="_blank"
            >
              MDN Web Docs
            </PostLink>
            .
          </Paragraph>

          <SectionTitle>Why should you learn HTML?</SectionTitle>

          <Paragraph>
            There are countless reasons for learning the fundamental language of
            the web. Here are 5 of them:
          </Paragraph>

          <List>
            <ListItem>
              To be able to use the fundamental web dev language
            </ListItem>
            <ListItem>
              To hand-craft beautiful websites instead of relying on tools like
              Worpress or Wix
            </ListItem>
            <ListItem>To build web applications</ListItem>
            <ListItem>To impress friends</ListItem>
            <ListItem>To have fun 😃</ListItem>
          </List>

          <Paragraph>
            Hopefully you learned something new here. See you next time!
          </Paragraph>
        </PostWrapper>

        <RelatedPostsWrapper>
          <RelatedPostsHeading>Related posts</RelatedPostsHeading>

          <RelatedPostList>
            <RelatedPost>
              <img
                src="img/related-1.jpg"
                alt="Person programming"
                width="75"
                height="75"
              />{" "}
              <PostLink href="#">How to Learn Web Development</PostLink>
              <RelatedPostAuthor>By Jonas Schmedtmann</RelatedPostAuthor>
            </RelatedPost>
            <RelatedPost>
              <img
                src="img/related-2.jpg"
                alt="Lightning"
                width="75"
                height="75"
              />{" "}
              <PostLink href="#">The Unknown Powers of CSS</PostLink>
              <RelatedPostAuthor>By Jim Dillon</RelatedPostAuthor>
            </RelatedPost>
            <RelatedPost>
              <img
                src="img/related-3.jpg"
                alt="JavaScript code on a screen"
                width="75"
                height="75"
              />{" "}
              <PostLink href="#">Why JavaScript is Awesome</PostLink>
              <RelatedPostAuthor>By Matilda</RelatedPostAuthor>
            </RelatedPost>
          </RelatedPostList>
        </RelatedPostsWrapper>

        <Footer>
          <Copyright>Copyright &copy; 2027 by The Code Magazine.</Copyright>
        </Footer>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  color: #444;
  font-family: sans-serif;

  border-top: 10px solid #1098ad;
  position: relative;
`;

const Container = styled.div`
  width: 1200px;
  /* margin-left: auto;
  margin-right: auto; */
  margin: 0 auto;
`;

const MainHeader = styled.header`
  background-color: #f7f7f7;
  /* padding: 20px;
  padding-left: 40px;
  padding-right: 40px; */
  padding: 20px 40px;
  margin-bottom: 60px;

  /* FLOATS */
  &::after {
    content: "";
    display: block;
    clear: both;
  }
`;

const Title = styled.h1`
  color: #1098ad;
  font-size: 26px;
  text-transform: uppercase;
  font-style: italic;

  &::first-letter {
    font-style: normal;
    margin-right: 5px;
  }

  /* FLOATS */
  float: left;
`;

const Nav = styled.nav`
  font-size: 18px;

  /* FLOATS */
  float: right;
`;

const NavLink = styled(Link)`
  color: #1098ad;
  text-decoration: none;
  margin-right: 30px;
  margin-top: 10px;
  display: inline-block;

  &:visited {
    color: #1098ad;
  }

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    color: orangered;
    font-weight: bold;
    text-decoration: underline orangered;
  }

  &:active {
    background-color: black;
    font-style: italic;
  }
`;

const PostWrapper = styled.article`
  margin-bottom: 60px;

  /* FLOATS */
  width: 825px;
  float: left;
`;

const PostHeader = styled.header`
  margin-bottom: 40px;
`;

const PostTitle = styled.h2`
  position: relative;
  color: #1098ad;
  font-size: 40px;
  margin-bottom: 30px;

  &::before {
    content: "TOP";
    background-color: #ffe70e;
    color: #444;
    font-size: 16px;
    font-weight: bold;
    display: inline-block;
    padding: 5px 10px;
    position: absolute;
    top: -10px;
    right: -25px;
  }
`;

const Paragraph = styled.p`
  font-size: 22px;
  line-height: 1.5;
  margin-bottom: 15px;
`;

const List = styled.ul`
  margin-left: 50px;
  margin-bottom: 20px;
`;

const ListItem = styled.li`
  font-size: 20px;
  margin-bottom: 10px;

  &:first-child {
    font-weight: bold;
  }

  &:last-child {
    margin-bottom: 0;
    font-style: italic;
  }
`;

const AuthorImg = styled.img`
  /* FLOATS */
  float: left;
  margin-bottom: 20px;
`;

const AuthorInfo = styled(Paragraph)`
  font-style: italic;
  font-size: 18px;

  /* FLOATS */
  float: left;
  padding-top: 10px;
  margin-left: 20px;
`;

const PostImg = styled.img`
  width: 100%;
  height: auto;
`;

const PostLink = styled.a`
  color: #1098ad;
  text-decoration: none;

  &:visited {
    color: #1098ad;
  }

  &:hover {
    color: orangered;
    font-weight: bold;
    text-decoration: underline orangered;
  }

  &:active {
    background-color: black;
    font-style: italic;
  }
`;

const LikeButton = styled.button`
  font-size: 22px;
  padding: 20px;
  cursor: pointer;

  position: absolute;
  bottom: 50px;
  right: 50px;
`;

const SectionTitle = styled.h3`
  color: #1098ad;
  font-size: 30px;
  margin-bottom: 20px;
  margin-top: 40px;
`;

const RelatedPostsWrapper = styled.aside`
  background-color: #f7f7f7;
  border-top: 5px solid #1098ad;
  border-bottom: 5px solid #1098ad;
  /* padding-top: 50px;
  padding-bottom: 50px; */
  padding: 50px 40px;
  width: 500px;

  /* FLOATS */
  width: 300px;
  float: right;
`;

const RelatedPostsHeading = styled.h4`
  margin-bottom: 30px;
  font-size: 20px;
  text-transform: uppercase;
  text-align: center;
`;

const RelatedPostList = styled(List)`
  list-style: none;
  margin-left: 0;
`;

const RelatedPost = styled(ListItem)``;

const RelatedPostAuthor = styled(Paragraph)`
  font-size: 18px;
  font-weight: bold;
`;

const Footer = styled.footer`
  clear: both;
`;

const Copyright = styled(Paragraph)`
  font-size: 16px;
`;
