import React, { useEffect, useRef, useState } from 'react';
import Reveal from "reveal.js";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/beige.css";
import './App.css';

function App() {
  const deckDivRef = useRef<HTMLDivElement>(null);
  const deckRef = useRef<Reveal.Api | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (deckRef.current || !deckDivRef.current) return;

    deckRef.current = new Reveal(deckDivRef.current, {
      transition: "slide",
      width: window.innerWidth,
      height: window.innerHeight,
      controlsLayout: 'edges',
    });

    deckRef.current.initialize({
    }).then(() => {
      deckRef.current?.on('slidechanged', (event) => {
        console.log(event);
        setCurrentSlide(event.indexv);
      });
    });

    return () => {
      try {
        if (deckRef.current) {
          deckRef.current.destroy();
          deckRef.current = null;
        }
      } catch (e) {
        console.warn("Reveal.js destroy call failed.");
      }
    };
  }, []);

  return (
    <div className="App">
      <div className="reveal" ref={deckDivRef}>
        <div className="slides">
          <section>
            <section>
              <div className={`animate__animated ${currentSlide === 0 ? 'animate__flipInY' : 'animate__fadeOut'}`}>Slide 1</div>
            </section>
            <section>
              <div className={`animate__animated ${currentSlide === 1 ? 'animate__flipInX' : 'animate__fadeOut'}`}>Slide 2</div>
            </section>
            <section>
              <div className={`animate__animated ${currentSlide === 2 ? 'animate__flipInX' : 'animate__fadeOut'}`}>Slide 3</div>
            </section>
            <section>
              <div className={`animate__animated ${currentSlide === 3 ? 'animate__flipInX' : 'animate__fadeOut'}`}>Slide 4</div>
            </section>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;