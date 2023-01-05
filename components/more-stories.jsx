import PostPreview from './post-preview'

const MoreStories = ({ posts }) => {
  return (
    <section className="relative mx-auto max-w-7xl">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl pt-12 text-center lg:text-left">
        Recent Articles
      </h2>
      <div className="mx-auto mt-12 pb-6 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  )
}

export default MoreStories
