export default function ItchEmbed({ id, image, title, url }) {
  if (!id && image) {
    return (
      <div className="embed-wrap image-wrap">
        <img src={image} alt={`${title} logo`} />
      </div>
    );
  }

  const src = `https://itch.io/embed/${id}?bg_color=5283cc&fg_color=daecf2&link_color=daecf2&border_color=daecf2`;

  return (
    <div className="embed-wrap">
      <iframe
        title={`${title} on itch.io`}
        src={src}
        loading="lazy"
        width="552"
        height="167"
      >
        <a href={url}>{title}</a>
      </iframe>
    </div>
  );
}
