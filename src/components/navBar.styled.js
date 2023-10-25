import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinkItem = styled(Link)`
  margin: 5px;
  background-color: ${(props) => (props.$isActive ? "black" : "#5d576b")};
  padding: 10px;

  border-radius: 8px;
  color: ${(props) => (props.$isActive ? "white" : "#e8cee4")};
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: black;
    color: white;
  }
`;

export const LinkList = styled.ul`
  display: flex;
  align-items: start;
  font-family: "Architects Daughter", cursive;
`;

export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
