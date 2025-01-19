import { ContentData } from "../../../../constants";
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
            <div className={`content-text animate__animated ${show ? 'animate-delay-700ms animate__zoomIn' : 'animate__fadeOut'}`}>
                在开源的世界里，“Star” 就如同夜空中闪烁的繁星，是对项目价值的高度认可，也是你努力成果的耀眼见证。
            </div>
            <div className={`content-text animate__animated ${show ? 'animate-delay-1400ms animate__zoomIn' : 'animate__fadeOut'}`}>
                你所参与的项目累计收获了
                <span className="content-text-primary">
                    {` ${data.project.reduce((acc, item) => acc + item.starCount, 0)} `}
                </span>
                颗 Star，这些 Star 不仅代表着全球学习者对项目的喜爱，更是对你能力与创造力的由衷赞叹。
            </div>
            <div className={`content-text animate__animated ${show ? 'animate-delay-2100ms animate__zoomIn' : 'animate__fadeOut'}`}>
                今年，这些项目的 Star 数量呈现出令人瞩目的增长态势，共计增长了
                <span className="content-text-primary">
                    {` ${data.project.reduce((acc, item) => acc + item.yearGrowth, 0)} `}
                </span>
                颗 Star，每一次 Star 数量的跳动，都是对项目前行的有力鞭策。新的一年，愿这些星光继续闪耀，引领项目迈向更广阔的天地。
            </div>
        </>
    );
}