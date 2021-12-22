function Footer() {
  return (
    <>
      <footer>
        <p>
          Página diseñada y programada por <span>@nahuetomas</span>
        </p>
      </footer>
      <style jsx>{`
        p {
          font-weight: lighter;
          max-width: 350px;
          text-align: center;
          font-size: 16px;
          margin: 10px auto;
        }

        span {
          font-weight: bolder;
        }

        footer {
          border-top: 1px solid #000;
          padding-top: 20px;
        }
      `}</style>
    </>
  );
}

export default Footer;
