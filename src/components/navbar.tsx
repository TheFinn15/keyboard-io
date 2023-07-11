import { styled } from "styled-components";

const StyledNavbar = styled.nav`
  display: flex;
  width: 100vw;
  padding: 0.5rem;
  & ul {
    padding-inline-start: 0;
    display: flex;
    list-style-type: none;
    gap: 0.5rem;

    & li:first-child {
      flex-grow: 1;
    }
  }
`;

export default function Navbar() {
  return (
    <StyledNavbar>
      <ul>
        <li>KeyboardIO</li>
      </ul>
    </StyledNavbar>
  );
}
