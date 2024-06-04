type Props = {
  text: string;
  link: string;
};

export const NavBarLink = ({ text, link }: Props) => {
  return (
    <li className="nav-item">
      <a href={link} className="nav-link">
        {text}
      </a>
    </li>
  );
};
