import Image from "next/image";

function About() {
  return (
    <>
      <div>
        <Image
          src="/NAHUEL.jpg"
          width={200}
          height={200}
          alt="Nahuel Tomás Rodriguez"
        />

        <p>
          Hola! mi nombre es Nahuel, soy Desarrollador Web y me enfoco en
          desarrollo frontend, aunque cuento con algo de experiencia en backend.
        </p>
      </div>
      <style jsx>{`
        div {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        p {
          font-weight: bolder;
          max-width: 350px;
          text-align: center;
          font-size: 16px;
          margin: 30px auto 10px auto;
        }
      `}</style>
    </>
  );
}

export default About;
