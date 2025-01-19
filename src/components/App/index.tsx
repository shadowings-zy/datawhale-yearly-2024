import React, { useEffect, useRef, useState } from 'react';
import Reveal from "reveal.js";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/sky.css";
import './index.css';
import { Content } from '../Content/index.tsx';
import background01 from '../../assets/01.png';
import background02 from '../../assets/02.png';
import background03 from '../../assets/03.png';
import background04 from '../../assets/04.png';
import background05 from '../../assets/05.png';
import { Welcome } from '../Welcome/index.tsx';
import { PAGE_TYPE, SLIDE_TYPE } from '../../constants/index.ts';
import { ContentData } from '../../constants/index.ts';
import Volume from '../Volume/index.tsx';

export const App = () => {
  const deckDivRef = useRef<HTMLDivElement>(null);
  const deckRef = useRef<Reveal.Api | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [pageType, setPageType] = useState(PAGE_TYPE.WELCOME);
  const [contentData, setContentData] = useState<ContentData | null>(null);

  const handleSubmit = (username: string, contentDataList: ContentData[]) => {
    if (!username) {
      alert('请输入用户名');
      return;
    }
    const currentUserContentData = contentDataList.find(item => item.username === username || item.email === username);
    setPageType(PAGE_TYPE.CONTENT);
    console.log('currentUserContentData', currentUserContentData, contentDataList);
    setContentData(currentUserContentData ? currentUserContentData : null);
  }

  useEffect(() => {
    if (deckRef.current || !deckDivRef.current) return;

    deckRef.current = new Reveal(deckDivRef.current, {
      controls: true,
      controlsTutorial: true,
      progress: false,
      transition: "slide",
      width: window.innerWidth,
      height: window.innerHeight,
      controlsLayout: 'edges',
      scrollActivationWidth: 0,
      hideInactiveCursor: true,
      hideCursorTime: 0,
    });

    deckRef.current.initialize({
    }).then(() => {
      if (deckRef.current) {
        deckRef.current.on('slidechanged', (event) => {
          setCurrentSlide(event.indexv);
        });
      }
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
  }, [pageType]);

  return (
    <div className="app" style={{ height: window.innerHeight }}>
      <Volume />
      {pageType === PAGE_TYPE.WELCOME && <Welcome handleSubmit={handleSubmit} />}
      {pageType === PAGE_TYPE.CONTENT && (
        <div className="reveal" ref={deckDivRef}>
          <div className="slides">
            <section>
              <section data-background-image={background01}>
                <Content currentSlide={currentSlide} index={0} slideType={SLIDE_TYPE.CONTRIBUTE} data={contentData} />
              </section>
              <section data-background-image={background02}>
                <Content currentSlide={currentSlide} index={1} slideType={SLIDE_TYPE.PROJECT} data={contentData} />
              </section>
              <section data-background-image={background03}>
                <Content currentSlide={currentSlide} index={2} slideType={SLIDE_TYPE.COMMIT_INFO} data={contentData} />
              </section>
              <section data-background-image={background04}>
                <Content currentSlide={currentSlide} index={3} slideType={SLIDE_TYPE.DATAWHALE_INFO} data={contentData} />
              </section>
              <section data-background-image={background05}>
                <Content currentSlide={currentSlide} index={4} slideType={SLIDE_TYPE.SUMMARY} data={contentData} />
              </section>
            </section>
          </div>
        </div>
      )}
    </div>
  );
}