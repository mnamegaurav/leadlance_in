/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from "theme-ui";
import SectionHeading from "../components/section-heading";
import Service from "../components/cards/service";
import { CgWebsite } from "react-icons/cg";

const data = [
  {
    id: 1,
    icon: <CgWebsite color="#81a1a2" size="3rem" />,
    moreLink: "#learn-more",
    title: "Free Consultation",
  },
  {
    id: 2,
    icon: <CgWebsite color="#81a1a2" size="3rem" />,
    moreLink: "#learn-more",
    title: "Full Stack Websites/Web Apps",
  },
  {
    id: 3,
    icon: <CgWebsite color="#81a1a2" size="3rem" />,
    moreLink: "#learn-more",
    title: "Django Application",
  },
  {
    id: 4,
    icon: <CgWebsite color="#81a1a2" size="3rem" />,
    moreLink: "#learn-more",
    title: "Rest API Development",
  },
  {
    id: 5,
    icon: <CgWebsite color="#81a1a2" size="3rem" />,
    moreLink: "#learn-more",
    title: "Node.js Applications",
  },
  {
    id: 6,
    icon: <CgWebsite color="#81a1a2" size="3rem" />,
    moreLink: "#learn-more",
    title: "ReactJS/NextJS Applications",
  },
  {
    id: 7,
    icon: <CgWebsite color="#81a1a2" size="3rem" />,
    moreLink: "#learn-more",
    title: "E-Commerce",
  },
  {
    id: 8,
    icon: <CgWebsite color="#81a1a2" size="3rem" />,
    moreLink: "#learn-more",
    title: "Online Booking",
  },
  {
    id: 9,
    icon: <CgWebsite color="#81a1a2" size="3rem" />,
    moreLink: "#learn-more",
    title: "iOS Apps",
  },
  {
    id: 10,
    icon: <CgWebsite color="#81a1a2" size="3rem" />,
    moreLink: "#learn-more",
    title: "Android Apps",
  },
  {
    id: 11,
    icon: <CgWebsite color="#81a1a2" size="3rem" />,
    moreLink: "#learn-more",
    title: "Minimal Viable Product",
  },
  {
    id: 11,
    icon: <CgWebsite color="#81a1a2" size="3rem" />,
    moreLink: "#learn-more",
    title: "Responsive Websites & Dashboards",
  },
];

const OtherServices = () => {
  return (
    <Box as="section" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Other services you must appreciate"
          description="Focus only on the meaning, we take care of the design. As soon as the meeting end you can export in one click into your preferred."
        />
        <Box sx={styles.contentWrapper}>
          {data?.map((item) => (
            <Service key={item.id} item={item} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};
export default OtherServices;

const styles = {
  section: {
    backgroundColor: "#F9FAFC",
    pt: [9, 9, 9, 11],
    pb: [9, 9, 9, 12, 12, 14],
  },
  heading: {
    mb: [6, null, null, 8, 9, null, 13],
    p: {
      maxWidth: 500,
      margin: "10px auto 0",
    },
  },
  contentWrapper: {
    gap: ["30px 30px", "30px 30px", "30px 30px", "80px 30px"],
    display: "grid",
    justifyContent: ["center", "center", "center", "unset"],
    gridTemplateColumns: [
      "repeat(1, 285px)",
      "repeat(1, 325px)",
      "repeat(1, 285px)",
      "repeat(3, 1fr)",
    ],
  },
};
