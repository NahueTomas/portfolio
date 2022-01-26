function About({ texto }) {
  return (
    <>
      <div>
        <img
          src="/NAHUEL.jpg"
          width={200}
          height={200}
          alt="Nahuel Tomás Rodriguez"
        />

        <p>{texto}</p>
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
          animation: animacion-izq-der 0.8s;
        }

        img {
          animation: animacion-izq-der 0.8s;
        }
      `}</style>
    </>
  );
}

export default About;
