const YouTubeEmbed = ({title, id}) => {
  return (
    <iframe
      frameBorder="0"
      allowfullscreen="1"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      title={title}
      src={`https://www.youtube.com/embed/${id}?autoplay=0&amp;mute=0&amp;controls=1&amp;origin=https%3A%2F%2Fwww.codestackr.com&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;iv_load_policy=3&amp;modestbranding=1&amp;enablejsapi=1&amp;widgetid=1`}
      id="widget2"
    ></iframe>
  )
}

export default YouTubeEmbed
