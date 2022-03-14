import * as React from "react";
import styled from "styled-components";
import { colors } from "../constants";
import { formatIndex } from "../helpers";

import DropdownIcon from "./DropdownIcon";

const AccordionContext = React.createContext();

function Accordion({ children }) {
  const [openIdx, setOpenIdx] = React.useState(0);

  return (
    <AccordionContext.Provider value={[openIdx, setOpenIdx]}>
      <Wrapper>
        {React.Children.map(children, (child, childIdx) => {
          return React.cloneElement(child, {
            index: childIdx,
          });
        })}
      </Wrapper>
    </AccordionContext.Provider>
  );
}

function AccordionItem({ index, title, children }) {
  const [openIdx, setOpenIdx] = React.useContext(AccordionContext);
  const isOpen = openIdx === index;
  const styles = {
    "--text-color": isOpen ? colors.primary : colors.gray23,
    "--index-color": isOpen ? colors.primary : colors.gray83,
    "--border": isOpen ? `4px solid ${colors.primary}` : "",
    color: "var(--text-color)",
  };

  return (
    <ItemWrapper onClick={() => setOpenIdx(index)} style={styles}>
      <Index>{formatIndex(index)}</Index>
      <Title>{title}</Title>
      <DropdownIcon />
      {isOpen ? <ContentsWrapper>{children}</ContentsWrapper> : null}
    </ItemWrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  width: 700px;
  margin: 96px auto;
`;

const ItemWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  column-gap: 24px;
  row-gap: 32px;
  align-items: center;

  padding: 24px;
  border-top: var(--border);
  box-shadow: 0 0 32px rgba(0, 0, 0, 0.1);
`;

const Index = styled.p`
  font-size: ${24 / 16}rem;
  font-weight: 500;
  color: var(--index-color);
`;

const Title = styled.p`
  font-size: ${24 / 16}rem;
  font-weight: 500;
  color: var(--text-color);
`;

const ContentsWrapper = styled.div`
  grid-column: 2;

  p {
    margin-bottom: 24px;
    line-height: 1.6;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 12px;

    margin-left: 20px;
    color: ${colors.gray56};
  }
`;

export default Accordion;

export { Accordion, AccordionItem };
