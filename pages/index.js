import Head from "next/head";
import { HOME_OG_IMAGE_URL } from "../lib/constants";
import MoreStories from "../components/more-stories";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Header from "../components/header";
import Hero from "../components/hero";
import config from "../blog.config";
import Container from "../components/container";
import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Home({ posts, prevPosts, nextPosts }) {
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
          <meta property="og:url" content="https://www.codestackr.com/" />
        </Head>
        <Header />
        <Container>
          <Hero />
          {posts.length > 0 && (
            <>
              <MoreStories posts={posts} />
              <Link href="/blog" className="flex mx-auto max-w-7xl pb-8">
                <button
                  type="submit"
                  className="block rounded-md bg-gradient-to-r from-orange-500 to-amber-600 py-3 px-4 font-medium text-white shadow hover:from-orange-600 hover:to-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-slate-900 flex"
                >
                  more articles
                  <ArrowSmallRightIcon className="w-6 ml-6" />
                </button>
              </Link>
            </>
          )}
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

  const startIndex = 0;
  const endIndex = config.postsPerPage;
  const prevPosts = null;
  const nextPosts = endIndex >= posts.length ? null : 2;

  return {
    props: { posts: posts.slice(startIndex, endIndex), prevPosts, nextPosts },
  };
};
