/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from "theme-ui";
import { rgba } from "polished";
import SectionHeading from "../components/section-heading";
import Service from "../components/cards/service";
import { CgWebsite } from "react-icons/cg";
import { FaMobileAlt } from "react-icons/fa";
import { IoHelpBuoy } from "react-icons/io5";

const data = [
  {
    id: 1,
    icon: <IoHelpBuoy color="#81a1a2" size="3rem" />,
    title: "Consultation",
    description: `You can have a call with us anytime to discuss your requirement and we will always be ready for help.`,
  },
  {
    id: 2,
    icon: <CgWebsite color="#f7b59c" size="3rem" />,
    title: "Website Development",
    description: `We are expert in Landing Pages, Informative Websites, Custom Websites for your business, E-Commerce Websites, Grocery Websites, Educational Wewbsites and much more`,
  },
  {
    id: 3,
    icon: <FaMobileAlt color="#55acee" size="3rem" />,
    title: "Mobile App Development",
    description: `We have a great team of Mobile App developers who can build Any kind of Mobile Apps such as E-commerce, Grocery, Hotel Booking, File Managers, Audio Recorders, Utitlity Apps, Social Media Apps and much more.`,
  },
];

const Services = () => {
  return (
    <Box as="section" id="services" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Grow your Business with our top quality services"
          description="Team of Software Developers who can bring the real number in your growth, build your online presence and help you build a successful business."
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

export default Services;

const styles = {
  section: {
    backgroundColor: rgba("#FFF5ED", 0.5),
    pt: [11, 11, 11, 12, 12, 12, 14],
    pb: [7, 7, 7, 9, 9, 10, 11],
  },
  heading: {
    maxWidth: [null, null, null, 455, 660],
    mb: [6, null, null, 8, null, 9, 13],
  },
  contentWrapper: {
    gap: 30,
    display: "grid",
    justifyContent: ["center", null, null, "unset"],
    gridTemplateColumns: [
      "repeat(1, 285px)",
      "repeat(1, 325px)",
      "repeat(1, 285px)",
      "repeat(3, 1fr)",
    ],
  },
};
