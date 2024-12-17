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
          </article>
          <a href="/booking" className="home__btn">Book Now</a>
        </section>
      </main>
    </>
  );
};

export default Home;
