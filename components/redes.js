import SocialMedia from "./social-media";

function Redes() {
  return (
    <>
      <div>
        <SocialMedia media="github" />
        <SocialMedia media="instagram" />
        <SocialMedia media="linkedin" />
        <SocialMedia media="twitter" />
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
