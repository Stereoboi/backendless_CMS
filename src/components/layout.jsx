import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";
import { NavContainer } from "./navBar.styled";
import NavBar from "./navBar";

export default function Layout({ data }) {
  return (
    <NavContainer>
      <NavBar data={data} />
      <Outlet />
    </NavContainer>
  );
}

Layout.propTypes = {
  data: PropTypes.array.isRequired,
};
