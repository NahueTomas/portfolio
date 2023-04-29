import Head from "next/head";
import Header from "../components/header";
import Redes from "../components/redes";
import Titulo from "../components/titulo";
import About from "../components/about";
import TituloSection from "../components/titulo-section";
import Skills from "../components/skills";
import Grid from "../components/grid";
import Proyecto from "../components/proyecto";
import Footer from "../components/footer";

const redes = [
  {
    site: "github",
    url: "https://github.com/NahueTomas",
    img: "/icons/GITHUB.svg",
  },
  {
    site: "email",
    url: "mailto:nahutomas@outlook.com",
    img: "/icons/EMAIL.svg",
  },
  {
    site: "linkedin",
    url: "https://www.linkedin.com/in/nahuetomas/",
    img: "/icons/LINKEDIN.svg",
  }
];

const textoDePresentacion = "¡Hola! Soy Nahuel, técnico en informática y estudiante de licenciatura en sistemas en la UNGS. Tengo experiencia en desarrollo frontend y backend."

export default function Home() {
  return (
    <>
      <div className="App">
        <Head>
          <title>Nahuel Tomás Rodriguez</title>
          <meta name="description" content="Nahuel's portfolio" />
          <link rel="icon" href="/NAHUEL.jpg" />
        </Head>

        <Header>
          <div className="titles">
            <Titulo />
            <Titulo texto="Desarrollador Web" />
          </div>

          <Redes data={redes} />
        </Header>

        <main>
          <section>
            <About texto={textoDePresentacion} />
          </section>
          <section>
            <TituloSection texto="Conocimientos" />
            <Skills />
          </section>
          <section>
            <TituloSection texto="Desarrollos" />
            <Grid>
              <Proyecto
                name="FLASHEO"
                url="https://flasheo.vercel.app/"
                stack="Figma, NextJS, CSS, MongoDB"
              />
              <Proyecto
                name="STUDY"
                url="https://github.com/NahueTomas/study"
                stack="Figma, NodeJS, PUG, JavaScript, CSS, MongoDB"
              />
              <Proyecto
                name="4-IN-1"
                url="https://github.com/NahueTomas/4-IN-1"
                stack="Figma, React, CSS"
              />
              <Proyecto
                name="PROMO"
                url="https://promosnacks.netlify.app/"
                stack="Figma, HTML, CSS, JavaScript, NodeJS y MongoDB"
              />
            </Grid>
          </section>
        </main>

        <Footer />
      </div>

      <style jsx>{`
        section {
          max-width: 500px;
          margin: 60px auto;
        }
      `}</style>
    </>
  );
}
