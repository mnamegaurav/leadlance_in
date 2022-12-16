import { ThemeProvider } from "theme-ui";
import theme from "../theme";
import SEO from "../components/seo";
import Layout from "../components/layout";
import { Box, Container } from "theme-ui";
import { rgba } from "polished";

export default function ContactUs() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="Leadlance"
          description="Team of top Software Developers, We help startups and brands to build their online presence through Websites, Mobile Apps & Tools which impacts the World."
        />

        <Box as="section" sx={styles.section}>
          <Container>
            <Box>
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSdYKk5rOsKZVTU798gEn3xj_vLfSfShHz4z4mbuI8v3tWsSEQ/viewform?embedded=true"
                width="100%"
                height="1500"
                frameborder="0"
                marginheight="0"
                marginwidth="0"
              >
                Loading…
              </iframe>
            </Box>
          </Container>
        </Box>
      </Layout>
    </ThemeProvider>
  );
}

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
};
