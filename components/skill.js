import Image from "next/image";

function Skill({ source }) {
  const name = source.split("/")[2].split(".")[0];
  return (
    <>
      <div title={name}>
        <Image src={source} alt={name} width={70} height={70} />
      </div>
      <style jsx>{`
        div {
          margin: 10px;
          position: relative;
        }
      `}</style>
    </>
  );
}

export default Skill;
