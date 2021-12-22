import Image from "next/image";

function Proyecto({ name }) {
  return (
    <>
      <a target="_blank" rel="noopener">
        <div>
          <Image src={`/icons/${name}.svg`} width={45} height={45} alt={name} />
        </div>
      </a>

      <style jsx>{`
        a {
          width: 100%;
          height: 200px;
          border-radius: 10px;
          position: relative;
          background: url("/${name}.png");
          transition: transform 0.1s;
          box-shadow: 5px 5px 5px #00000050;
        }

        a:hover {
          transform: rotate(-1deg) scale(1.1);
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
