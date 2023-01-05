import Avatar from "./avatar";
import DateFormatter from "./date-formatter";

const SideInfo = ({ author, date, readingTime }) => {
  return (
    <div className="flex lg:flex-col justify-between lg:justify-start items-center lg:items-end lg: pb-6 lg:gap-3">
      <Avatar name={author.name} picture={author.picture} />
      <DateFormatter dateString={date} />
      <p>{readingTime}</p>
    </div>
  );
};

export default SideInfo;
