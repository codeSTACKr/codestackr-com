import Head from "next/head";
import Container from "../../components/container";
import Header from "../../components/header";
import Layout from "../../components/layout";
import MoreStories from "../../components/more-stories";
import { getAllPosts } from "../../lib/api";
import { HOME_OG_IMAGE_URL } from "../../lib/constants";

export default function Posts({ posts }) {
  return (
    <>
      <Layout>
        <Head>
          <title>codeSTACKr - Tutorials for all things `code`</title>
          <meta
            name="description"
            content="The best content web development content - FREE. My tutorials are generally about web development and include coding languages such as HTML, CSS, Sass, Tailwind CSS, JavaScript, TypeScript, React, Next.js, and much more! "
          />
          <meta property="og:image" content={HOME_OG_IMAGE_URL} />
          <meta
            property="og:image:alt"
            content="codeSTACKr - Tutorials for all things `code`"
          />
          <meta property="og:url" content="https://www.codestackr.com/blog" />
        </Head>
        <Header />
        <Container>
          {posts.length > 0 && <MoreStories posts={posts} />}
        </Container>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const posts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
    "draft",
  ]);

  return {
    props: { posts },
  };
};
