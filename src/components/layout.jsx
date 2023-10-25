import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";
import NavBar from "./navBar";

export default function Layout({ data }) {
  return (
    <div>
      <NavBar data={data} />
      <Outlet />
    </div>
  );
}

Layout.propTypes = {
  data: PropTypes.array.isRequired,
};
