import styled from "styled-components";
import { colors } from "../constants";

const DropdownIcon = () => (
  <Wrapper
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M19 9l-7 7-7-7"
    />
  </Wrapper>
);

const Wrapper = styled.svg`
  width: 24px;
  height: 24px;
  /* stroke: var(--text-color); */
`;

export default DropdownIcon;
