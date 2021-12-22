import Skill from "./skill";

function Skills() {
  const items = [
    "/icons/CSS.svg",
    "/icons/HTML.svg",
    "/icons/JAVASCRIPT.svg",
    "/icons/NODE.svg",
    "/icons/REACT.svg",
    "/icons/FIGMA.svg",
    "/icons/MONGODB.svg",
    "/icons/JAVA.svg",
    "/icons/PYTHON.svg",
  ];

  return (
    <>
      <div>
        {items.map((item) => (
          <Skill source={item} key={item} />
        ))}
      </div>

      <style jsx>{`
        div {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-evenly;
        }
      `}</style>
    </>
  );
}

export default Skills;
