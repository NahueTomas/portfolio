import Head from "next/head";
import Header from "../components/header";
import Redes from "../components/redes";
import Titulo from "../components/titulo";
import About from "../components/about";
import TituloSection from "../components/titulo-section";
import Skills from "../components/skills";
import Grid from "../components/grid";
import Proyecto from "../components/proyecto";

export default function Home() {
  return (
    <>
      <div className="App">
        <Head>
          <title>Nahuel Tomás Rodriguez</title>
          <meta name="description" content="Nahuel's portfolio" />
          <link rel="icon" href="/NAHUEL.JPG" />
        </Head>

        <Header>
          <div className="titles">
            <Titulo />
            <Titulo texto="Desarrollador Web" />
          </div>

          <Redes />
        </Header>

        <main>
          <section>
            <About />
          </section>
          <section>
            <TituloSection texto="Conocimientos" />
            <Skills />
          </section>
          <section>
            <TituloSection texto="Trabajos realizados" />
            <Grid>
              <Proyecto name="FLASHEO" url="https://flasheo.vercel.app/" />
              <Proyecto
                name="STUDY"
                url="https://study-app-2021.herokuapp.com/bienvenido"
              />
              <Proyecto
                name="4-IN-1"
                url="https://github.com/NahueTomas/4-IN-1"
              />
              <Proyecto name="PROMO" url="https://promosnacks.netlify.app/" />
            </Grid>
          </section>
        </main>

        <footer>
          <p>Página diseñada y programada por @nahuetomas</p>
        </footer>
      </div>

      <style jsx>{`
        section {
          max-width: 500px;
          margin: 60px auto;
        }

        p {
          font-weight: lighter;
          max-width: 350px;
          text-align: center;
          font-size: 16px;
          margin: 10px auto;
        }

        footer {
          border-top: 1px solid #000;
          padding-top: 20px;
        }
      `}</style>
    </>
  );
}
