import { ContentData } from '../../../../constants';
import React from 'react';
import '../../index.css';

interface IProps {
  data: ContentData;
  show: boolean;
}

export const Project = (props: IProps) => {
  const { data, show } = props;
  return (
    <>
      <div
        className={`content-text animate__animated ${show ? 'animate-delay-700ms animate__zoomIn' : 'animate__fadeOut'}`}
      >
        在开源的世界里，“Star” 就如同夜空中闪烁的繁星，是对项目价值的高度认可，也是你努力成果的耀眼见证。
      </div>
      <div
        className={`content-text animate__animated ${show ? 'animate-delay-1400ms animate__zoomIn' : 'animate__fadeOut'}`}
      >
        你所参与的项目今年收获了
        <span className="content-text-primary">
          {` ${data.project.reduce((acc, item) => acc + item.yearGrowth, 0)} `}
        </span>
        颗 Star，每一次 Star 数量的跳动，都是对项目前行的有力鞭策。在新的一年，愿这些星光继续闪耀，引领项目迈向更加广阔的天地。
      </div>
    </>
  );
};
