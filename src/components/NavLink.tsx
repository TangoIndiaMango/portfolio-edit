
type Props = {
  link: {
    name: string;
    link: string;
  };
};

const NavLink = ({ link }: Props) => {
  // const pathName = useLocation();
  // console.log(pathName)
  return (
    <a
      href={link.link}
      className={`rounded p-1 ${
        (window.location.hash === link.link) && "bg-[#111132] text-white"
      }`}
    >
      {link.name}
    </a>
  );
};

export default NavLink;
