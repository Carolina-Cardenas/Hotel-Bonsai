import React from "react";
import "./Home.css";

const Home: React.FC = () => {
 
  return (
    <>
      {/* Contenido principal */}
      <main>
        <section className="home">
          <article className="home__content">
            <h1 className="home__hotel">Welcome Bonzai hotel</h1>
            <a href="/reservation"  className="home__btn">Book Now</a>
          </article>
        </section>
      </main>
    </>
  );
};

export default Home;
