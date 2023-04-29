import Skill from "./skill";

function Skills() {
  const items = [
    "/icons/HTML.svg",
    "/icons/CSS.svg",
    "/icons/SASS.svg",
    "/icons/TAILWIND.svg",
    "/icons/JAVASCRIPT.svg",
    "/icons/NODE.svg",
    "/icons/REACT.svg",
    "/icons/NEXTJS.svg",
    "/icons/MONGODB.svg",
    "/icons/MYSQL.svg",
    "/icons/DYNAMODB.svg",
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
