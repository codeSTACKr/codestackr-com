import { CH } from "@code-hike/mdx/components"
import { MDXRemote } from 'next-mdx-remote'
import YouTubeEmbed from "./YouTubeEmbed";

const components = { CH, YouTubeEmbed }

const PostBody = ({ content }) => {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="prose dark:prose-invert lg:prose-xl prose-blockquote:border-orange-500 prose-blockquote:border-l-4 max-w-[88vw]">
        <MDXRemote {...content} components={components} />
      </div>
    </div>
  );
};

export default PostBody;
