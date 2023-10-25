import { Link } from "react-router-dom";
import PropTypes from "prop-types";
export default function NavBar({ data }) {
  return (
    <ul>
      {data.map((el) => {
        return (
          <Link key={el.id} to={el.id}>
            {el.title}
          </Link>
        );
      })}
    </ul>
  );
}

NavBar.propTypes = {
  data: PropTypes.array.isRequired,
};
