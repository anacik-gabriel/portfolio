import { motion } from "framer-motion";
import { Header, Nav, NavLink, Logo, Underline } from "./NavBarElements";
import { Link } from "react-scroll";
import { useState } from "react";

const icon = {
  hidden: {
    pathLength: 0,
    fill: "rgba(255,255,255,0)",
  },
  visible: {
    pathLength: 1,
    fill: "rgba(255,255,255,1)",
    transition: {
      fill: { duration: 4 },
      duration: 3,
      ease: "easeInOut",
    },
  },
};

const navItems = [
  {
    name: "home",
    text: ".home()",
  },
  { name: "about", text: ".about()" },
  { name: "projects", text: ".projects()" },
  { name: "contact", text: ".contact()" },
];

const NavItem = ({ name, text, selected, onClick }) => (
  <NavLink
    animate={{
      opacity: selected ? 1 : 0.5,
    }}
  >
    <Link to={name} onClick={onClick}>
      {text}
    </Link>
    {selected && <Underline layoutId="underline" />}
  </NavLink>
);

const NavBar = () => {
  const [selected, setSelected] = useState(0);

  return (
    <Header>
      <Link to="home">
        <Logo
          animate={{ rotate: 360 }}
          transition={{ delay: 3, duration: 1.5 }}
        >
          <motion.svg
            id="item"
            initial="hidden"
            animate="visible"
            width="60"
            height="45"
            viewBox="0 0 60 65"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_0_3)">
              <motion.path
                d="M42.12 38.328H26.472V31.128H49.8V60.12C48.008 60.952 44.808 61.784 40.2 62.616C35.592 63.384 31.4 63.768 27.624 63.768C17.704 63.768 10.824 61.432 6.984 56.76C3.208 52.088 1.32 44.12 1.32 32.856C1.32 22.232 3.592 14.424 8.136 9.432C12.68 4.376 19.816 1.848 29.544 1.848C32.872 1.848 36.04 1.944 39.048 2.136C42.12 2.264 44.616 2.488 46.536 2.808V10.008C43.976 9.752 41.192 9.56 38.184 9.432C35.24 9.304 32.36 9.24 29.544 9.24C22.248 9.24 17.096 11.032 14.088 14.616C11.144 18.2 9.672 24.28 9.672 32.856C9.672 37.08 9.896 40.632 10.344 43.512C10.856 46.328 11.656 48.6 12.744 50.328C14.024 52.504 15.848 54.072 18.216 55.032C20.584 55.928 24.04 56.376 28.584 56.376C30.376 56.376 32.488 56.248 34.92 55.992C37.352 55.672 39.752 55.256 42.12 54.744V38.328Z"
                fill="white"
                variants={icon}
              />
            </g>
            <defs>
              <clipPath id="clip0_0_3">
                <rect width="51" height="65" fill="white" />
              </clipPath>
            </defs>
          </motion.svg>
        </Logo>
      </Link>
      <Nav>
        {navItems.map((el, i) => (
          <NavItem
            key={i}
            selected={selected === i}
            onClick={() => setSelected(i)}
            text={el.text}
            name={el.name}
          />
        ))}
      </Nav>
    </Header>
  );
};

export default NavBar;
