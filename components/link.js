/** @jsxRuntime classic */
/** @jsx jsx */
import NextLink from "next/link";
import { jsx, Link as ALink } from "theme-ui";
import { Link as MenuLink } from "react-scroll";
import { HiOutlineChevronRight } from "react-icons/hi";

export function NavLink({ path, label, children, ...rest }) {
  return (
    <MenuLink
      to={path}
      spy={true}
      offset={-70}
      smooth={true}
      duration={500}
      className="nav-item"
      activeClass="active"
      {...rest}
    >
      {label}
    </MenuLink>
  );
}

export function Link({ path, label, children, ...rest }) {
  return (
    <NextLink legacyBehavior href={path} passHref>
      <ALink {...rest}>{children ? children : label}</ALink>
    </NextLink>
  );
}

export function LearnMore({ path, label, children, ...rest }) {
  return (
    <NextLink legacyBehavior href={path}>
      <ALink sx={styles.learnMore} {...rest}>
        {label ?? "Learn More"} <HiOutlineChevronRight />
      </ALink>
    </NextLink>
  );
}

const styles = {
  learnMore: {
    color: "link",
    cursor: "pointer",
    fontSize: [1, 1, 1, 2],
    fontWeight: 500,
    display: "inline-flex",
    alignItems: "center",
    svg: {
      transition: "margin-left 0.3s ease-in-out 0s",
      ml: "3px",
    },
    ":hover": {
      svg: {
        ml: "5px",
      },
    },
  },
};
