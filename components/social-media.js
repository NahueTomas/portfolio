import Image from "next/image";

function SocialMedia({ url, img, site }) {
  return (
    <>
      <a href={url} target="_blank" rel="noreferrer">
        <Image src={img} alt={site} width="32" height="32" />
      </a>

      <style jsx>{`
        a {
          display: block;
        }
      `}</style>
    </>
  );
}

export default SocialMedia;
