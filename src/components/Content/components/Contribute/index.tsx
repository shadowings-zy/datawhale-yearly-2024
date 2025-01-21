import { ContentData } from '../../../../constants';
import React from 'react';
import '../../index.css';

interface IProps {
  data: ContentData;
  show: boolean;
}

export const Contribute = (props: IProps) => {
  const { data, show } = props;
  return (
    <>
      <div
        className={`content-text animate__animated ${show ? 'animate-delay-700ms animate__zoomIn' : 'animate__fadeOut'}`}
      >
        在过去一年，你的贡献如同灵动的音符，在Datawhale的舞台上奏响了精彩的乐章。下面，让我们一同回顾你在这一年里留下的坚实印记。
      </div>
      <div
        className={`content-text animate__animated ${show ? 'animate-delay-1400ms animate__zoomIn' : 'animate__fadeOut'}`}
      >
        你深度参与了
        <span className="content-text-primary">{` ${data.project.length} `}</span>
        个项目，包括
        <span className="content-text-primary">
          {` ${
            data.project.length > 3
              ? data.project
                  .sort((a, b) => b.yearGrowth - a.yearGrowth)
                  .slice(0, 3)
                  .map((item) => item.name)
                  .join('、')
              : data.project.map((item) => item.name).join('、')
          } `}
        </span>
        {data.project.length > 3 ? ' 等等' : ''}
        ，每一个项目都是一次挑战与机遇的交织。从项目的构思到落地，你的智慧与汗水融入其中，推动项目不断前行。
      </div>
      <div
        className={`content-text animate__animated ${show ? 'animate-delay-2100ms animate__zoomIn' : 'animate__fadeOut'}`}
      >
        全年，你总计提交了
        <span className="content-text-primary">{` ${data.commitCount} `}</span>次 commit
        <span className="content-text-primary">{` ${data.codeCount} `}</span>
        行代码，每一次 commit
        的代码都是你为项目添砖加瓦的见证。它们如同城市的建筑，构建起一个个惊艳的项目，为学习者带来价值。
      </div>
    </>
  );
};
