function Grid({ children }) {
  return (
    <>
      <div>{children}</div>

      <style jsx>{`
        div {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          grid-gap: 20px;
        }

        @media screen and (max-width: 515px) {
          div {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}

export default Grid;
