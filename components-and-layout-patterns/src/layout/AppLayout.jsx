import * as React from "react";
import styled from "styled-components";

export default function AppLayout() {
  return (
    <Wrapper>
      <Nav>Nav</Nav>
      <Menu>
        <MenuButton>New</MenuButton>
        <MenuButton>Reply</MenuButton>
        <MenuButton>Forward</MenuButton>
        <MenuButton>Mark unread</MenuButton>
        <DeleteButton>Trash</DeleteButton>
      </Menu>
      <EmailList>
        <Email>Email 1</Email>
        <Email>Email 2</Email>
        <Email>Email 3</Email>
        <Email>Email 4</Email>
        <Email>Email 5</Email>
        <Email>Email 6</Email>
        <Email>Email 7</Email>
        <Email>Email 8</Email>
        <Email>Email 9</Email>
        <Email>Email 10</Email>
      </EmailList>
      <Main>Email view</Main>
      <Aside>Additional info</Aside>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 80px 400px 1fr 250px;
  grid-template-rows: 80px 1fr;

  height: 100vh;
  color: hsl(210 10% 23%);
  font-family: sans-serif;
  font-size: 24px;
  line-height: normal;
  font-weight: bold;
  text-align: center;
`;

const Nav = styled.nav`
  grid-row: 1 / -1;

  padding-top: 24px;
  color: white;
  background-color: hsl(210 10% 23%);
`;

const Menu = styled.menu`
  display: flex;
  align-items: center;
  gap: 12px;

  grid-column: 2 / -1;

  padding: 0 40px;
  background-color: hsl(255 78% 60%);
`;

const MenuButton = styled.button`
  display: inline-block;
  padding: 8px 12px;
  border: none;
  color: hsl(0 0% 100%);
  font-size: 16px;
  font-weight: bold;
  background-color: hsl(255 53% 50%);
  cursor: pointer;
`;

const DeleteButton = styled(MenuButton)`
  margin-left: auto;
  background-color: hsl(339 67% 52%);
`;

const EmailList = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;

  padding: 40px;
  background-color: hsl(210 16% 93%);

  /* How elements that don't fit into container appear */
  overflow: scroll;
`;

const Email = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-shrink: 0;

  height: 96px;
  background-color: hsl(210 11% 71%);
`;

const Main = styled.main`
  padding-top: 24px;
`;

const Aside = styled.aside`
  padding-top: 24px;
  background-color: hsl(210 16% 93%);
`;
