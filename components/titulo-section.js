function TituloSection({ texto }) {
  return (
    <>
      <h3>{texto}</h3>

      <style jsx>{`
        h3 {
          display: flex;
          flex-direction: row;
          font-size: 1.5rem;
          font-weight: lighter;
        }
        h3:before,
        h3:after {
          content: "";
          flex: 1 1;
          border-bottom: 1px solid #000;
          margin: auto;
        }
        h3:before {
          margin-right: 10px;
        }
        h3:after {
          margin-left: 10px;
        }
      `}</style>
    </>
  );
}

export default TituloSection;
