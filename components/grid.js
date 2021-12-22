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
      `}</style>
    </>
  );
}

export default Grid;
