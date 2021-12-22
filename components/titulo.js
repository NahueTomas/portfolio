function Titulo({ texto }) {
  return (
    <>
      {!texto ? (
        <h1>
          Nahuel Tomás <br /> Rodriguez
        </h1>
      ) : (
        <h2>{texto}</h2>
      )}

      <style jsx>{`
        h1 {
          font-weight: bolder;
          text-align: center;
          font-size: 2rem;
          margin: 0.5rem;
        }

        h2 {
          font-weight: 400;
          text-align: center;
          font-size: 1.3rem;
          margin: 0.5rem;
        }
      `}</style>
    </>
  );
}

export default Titulo;
