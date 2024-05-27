import { Link } from "react-router-dom";

type Props = {
  link: {
    name: string;
    link: string;
  };
  onClick?: () => void;
};

const NavLink = ({ link, onClick }: Props) => {
  const isHashlink = link.link.startsWith("#");
  return isHashlink ? (
    <a
      href={link.link}
      className={`rounded p-1 ${
        window.location.hash === link.link && "bg-[#111132] text-white"
      }`}
      onClick={onClick}
    >
      {link.name}
    </a>
  ) : (
    <Link
      to={link.link}
      className={`rounded p-1 ${
        window.location.hash === link.link && "bg-[#111132] text-white"
      }`}
    >
      {link.name}
    </Link>
  );
};

export default NavLink;
