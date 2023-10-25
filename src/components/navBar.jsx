import { useLocation } from "react-router-dom";
import { LinkItem, LinkList, NavContainer } from "./navBar.styled";
import PropTypes from "prop-types";
export default function NavBar({ data }) {
  const location = useLocation();
  const currentTabId = location.pathname.replace("/backendless_CMS/", "");

  return (
    <NavContainer>
      <LinkList>
        {data.map((el) => {
          return (
            <LinkItem key={el.id} to={el.id} $isActive={el.id === currentTabId}>
              {el.title}
            </LinkItem>
          );
        })}
      </LinkList>
    </NavContainer>
  );
}

NavBar.propTypes = {
  data: PropTypes.array.isRequired,
};
