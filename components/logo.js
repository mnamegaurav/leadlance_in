/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "./link";
import Image from "./image";

export default function Logo({ isSticky, footer, ...props }) {
  return (
    <Link path="/" sx={styles.logo} {...props}>
      <Image src="assets/images/logo.png" css={{ height: "2rem" }} alt="Logo" />
    </Link>
  );
}
const styles = {
  logo: {
    alignItems: "center",
    cursor: "pointer",
    display: "inline-flex",
    svg: {
      height: "auto",
      width: [128, null, "100%"],
    },
  },
};
