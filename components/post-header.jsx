import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import PostTitle from './post-title'

const PostHeader = ({ title, coverImage, date, author, readingTime }) => {
  return (
    <div className='mx-auto max-w-7xl pt-8'>
      <div className="mb-8 md:mb-12 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div>
      {/* <PostTitle>{title}</PostTitle> */}
      {/* <div className="hidden md:block md:mb-12">
        <Avatar name={author.name} picture={author.picture} />
      </div> */}
      {/* <div className="max-w-2xl mx-auto">
        <div className="mb-6">
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
        <div className="mb-6 text-lg">
          {readingTime}
        </div>
      </div> */}
    </div>
  )
}

export default PostHeader
