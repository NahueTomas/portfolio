function SocialMedia({ url, img, site }) {
  return (
    <>
      <a href={url} target="_blank" rel="noreferrer">
        <img src={img} alt={site} />
      </a>

      <style jsx>{`
        a {
          display: block;
        }

        img {
          display: block;
          height: 35px
        }
      `}</style>
    </>
  );
}

export default SocialMedia;
