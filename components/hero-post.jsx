import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import Link from "next/link";

const HeroPost = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) => {
  return (
    <section className="flex flex-col overflow-hidden rounded-lg shadow-lg">
      <div className="flex-shrink-0">
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>
      <div className="flex flex-1 flex-col justify-between bg-white p-6">
        <div className="flex-1">
          <Link
            as={`/blog/${slug}`}
            href="/blog/[slug]"
            className="mt-2 block"
          >
            <p className="text-xl font-semibold text-gray-900 hover:underline">
              {title}
            </p>
            <p className="mt-3 text-base text-gray-500">{excerpt}</p>
          </Link>
        </div>
        <div className="mt-6 flex items-center">
          <Avatar name={author.name} picture={author.picture} />
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">{author.name}</p>
            <div className="flex space-x-1 text-sm text-gray-500">
              <DateFormatter dateString={date} />
              <span aria-hidden="true">&middot;</span>
              {/* <span>{readingTime} read</span> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroPost;
