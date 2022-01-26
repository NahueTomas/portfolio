import SocialMedia from "./social-media";

function Redes({ data }) {
  return (
    <>
      <div>
        {data.map((item) => (
          <SocialMedia
            key={item.site}
            url={item.url}
            img={item.img}
            site={item.site}
          />
        ))}
      </div>

      <style jsx>{`
        div {
          margin: 1rem auto;
          width: 180px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          animation: animacion-ab-arr 0.8s;
        }
      `}</style>
    </>
  );
}

export default Redes;
