import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/container";
import PostBody from "../../components/post-body";
import Header from "../../components/header";
import PostHeader from "../../components/post-header";
import Layout from "../../components/layout";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import PostTitle from "../../components/post-title";
import Head from "next/head";
import { serialize } from "next-mdx-remote/serialize";
import { remarkCodeHike } from "@code-hike/mdx";
import theme from "../../theme/codestackr.json";
import SideInfo from "../../components/SideInfo";
import imageSize from "rehype-img-size";

export default function Post({ post, morePosts, preview }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout preview={preview}>
      <Header />
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <Container>
          <article className="pb-32">
            <Head>
              <title>{post.title} | codeSTACKr</title>
              <meta property="og:image" content={post.coverImage} />
              <meta
                property="og:image:alt"
                content={`${post.title} | codeSTACKr`}
              />
              <meta
                property="og:url"
                content={`https://www.codestackr.com/blog/${post.slug}`}
              />
              <meta name="description" content={post.excerpt} />
            </Head>
            <PostHeader
              title={post.title}
              coverImage={post.coverImage}
            />
            <div className="flex flex-col lg:flex-row mx-auto max-w-7xl">
              <SideInfo author={post.author} date={post.date} readingTime={post.readingTime} />
              <PostBody content={post.content} />
            </div>
          </article>
        </Container>
      )}
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "coverImage",
    "excerpt",
    "readingTime",
  ]);

  post.content = await serialize(post.content, {
    mdxOptions: {
      development: false,
      remarkPlugins: [[remarkCodeHike, { autoImport: false, theme, showCopyButton: true }]],
      useDynamicImport: true,
      rehypePlugins: [[imageSize, { dir: "public" }]],
    },
  });

  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
