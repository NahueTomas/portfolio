import Image from "next/image";

function Proyecto({ name, url }) {
  return (
    <>
      <a target="_blank" rel="noreferrer" href={url}>
        <div>
          <Image src={`/icons/${name}.svg`} width={45} height={45} alt={name} />
        </div>
        <span>{name}</span>
      </a>

      <style jsx>{`
        a {
          width: 100%;
          height: 200px;
          border-radius: 10px;
          position: relative;
          background: url("/${name}.png");
          background-repeat: no-repeat;
          background-size: 100%;
          box-shadow: 5px 5px 5px #00000050;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.1s;
          text-decoration: none;
        }

        a:hover {
          transform: rotate(-1deg) scale(1.05);
        }

        span {
          color: #fff;
          font-size: 1.3rem;
          font-weight: lighter;
        }

        a:hover span {
          border-bottom: 1px solid #fff;
        }

        div {
          position: absolute;
          top: 5px;
          left: 5px;
        }
      `}</style>
    </>
  );
}

export default Proyecto;
