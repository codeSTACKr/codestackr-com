import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import Link from "next/link";

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition">
      <div className="flex-shrink-0">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <div className="flex flex-1 flex-col justify-between bg-slate-800 p-6">
        <div className="flex-1">
          <Link
            as={`/blog/${slug}`}
            href="/blog/[slug]"
            className="mt-2 block"
          >
            <p className="text-xl font-semibold text-slate-100">{title}</p>
            <p className="mt-3 text-base text-slate-300">{excerpt}</p>
          </Link>
        </div>
        <div className="mt-6 flex items-center">
          <div className="flex-shrink-0">
            <span className="sr-only">{author.name}</span>
            <Avatar picture={author.picture} />
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium 1">{author.name}</p>
            <div className="flex space-x-1 text-sm text-slate-300">
              <DateFormatter dateString={date} />
              {/* <span aria-hidden="true">&middot;</span> */}
              {/* <span>{readingTime} read</span> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostPreview;
