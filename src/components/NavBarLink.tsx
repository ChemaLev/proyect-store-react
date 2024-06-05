import { Link } from "react-router-dom";

type Props = {
  text: string
  link: string
};

export const NavBarLink = ({ text, link }: Props) => {
  return (
    <li className="nav-item">
      <Link to={link} className="nav-link">
        {text}
      </Link>
    </li>
  );
};
