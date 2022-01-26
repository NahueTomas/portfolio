function SocialMedia({ url, img, site }) {
  return (
    <>
      <a href={url} target="_blank" rel="noreferrer">
        <img src={img} alt={site} />
      </a>

      <style jsx>{`
        a {
          display: block;
          width: 32px;
          height: 32px;
        }

        img {
          display: block;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </>
  );
}

export default SocialMedia;
