/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from "theme-ui";
import Masonry from "react-masonry-component";
import SectionHeading from "../components/section-heading";
import BlogPost from "../components/cards/blog-post";

const data = [
  {
    id: 1,
    slug: "https://blog.devjunction.in/a-simple-guide-on-scaling-and-optimizing-a-django-application-to-the-moon",
    thumbnail: null,
    showDescription: true,
    title: `A simple guide on scaling and optimizing a Django application to the moon🚀`,
    description: `There are no doubts that Django is a well-structured, robust, and hell lot of maintainable web framework, which lets you focus on the real development, rather than...`,
  },
  {
    id: 2,
    slug: "https://blog.devjunction.in/create-a-global-state-with-react-context-no-redux-no-third-party-library-at-all-pure-react-for-global-state",
    thumbnail: null,
    showDescription: true,
    title: `Create a Global State with React Context 🦾, No Redux, No third party library at all, pure React for Global State.`,
    description: `A typical React application consists of many Components, things get pretty complex as an application grows. If you are using props...`,
  },
  {
    id: 3,
    slug: "https://blog.devjunction.in/best-practices-you-should-follow-for-building-a-secure-rest-api-backend",
    thumbnail: null,
    showDescription: true,
    title: `Best practices you should follow for building a secure REST API`,
    description: `REST APIs are everywhere, Rock-solid authentication mechanisms are the beginning for REST API security, but not the end. There are other security best practices to...`,
  },
];

const masonryOptions = { originTop: true };

const Blog = () => {
  return (
    <Box as="section" id="blog" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Popular blog post we update everyday"
          description="A Blog where we write and help other developer in becoming a great developer."
        />
        <Masonry options={masonryOptions} sx={styles.postContainer}>
          {data?.map((post) => (
            <BlogPost key={post.id} post={post} />
          ))}
        </Masonry>
      </Container>
    </Box>
  );
};

export default Blog;

const styles = {
  postContainer: {
    display: ["flex"],
  },
  section: {
    pt: [8, null, null, 9, null, 11],
    pb: [8, null, null, 9, null, 11],
    position: "relative",
  },
  heading: {
    mb: [6, 6, 7, 11],
  },
};
