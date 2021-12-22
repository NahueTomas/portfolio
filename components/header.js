function Header({ children }) {
  return (
    <>
      <header>{children}</header>

      <style jsx>{`
        header {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      `}</style>
    </>
  );
}

export default Header;
