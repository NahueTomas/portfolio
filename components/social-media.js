import Image from "next/image";

function SocialMedia({ media }) {
  const urls = {
    github: "https://github.com/NahueTomas",
    instagram: "https://www.instagram.com/nahuetomas/",
    linkedin: "https://www.linkedin.com/in/nahuetomas/",
    twitter: "https://twitter.com/NahueTomas",
  };

  return (
    <>
      <a href={urls[media]} target="_blank" rel="noreferrer">
        <Image
          src={`/icons/${media.toUpperCase()}.svg`}
          alt={media}
          width="32"
          height="32"
        />
      </a>

      <style jsx>{`
        img {
          display: block;
        }
      `}</style>
    </>
  );
}

export default SocialMedia;
