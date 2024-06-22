export default function ResponseDetailsBlock({ content, title }) {
  const titleTag = title ? <h3>{title}</h3> : null;
  return (
    <div className='response-details__block'>
      {titleTag}
      <div>
      <div dangerouslySetInnerHTML={{
        __html: content
      }} />
      </div>
    </div>
  )
}