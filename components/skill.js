import Image from "next/image";

function Skill({ source }) {
  return (
    <>
      <div>
        <Image src={source} alt={source} width={70} height={70} />
      </div>
      <style jsx>{`
        div {
          margin: 10px;
        }
      `}</style>
    </>
  );
}

export default Skill;
