import { ContentData, titleMap, TITLE_TYPE } from "../../../../constants/index.ts";
import React from 'react';
import '../../index.css';


interface IProps {
    data: ContentData;
    show: boolean;
}

export const Summary = (props: IProps) => {
    const { data, show } = props;

    const getTitle = () => {
        if (data.maxCommitProject.yearGrowth > 2000) {
            return titleMap[TITLE_TYPE.CONTRIBUTE];
        } else if (data.project.length > 3) {
            return titleMap[TITLE_TYPE.PROJECT];
        } else if (data.lastCommitTime) {
            return titleMap[TITLE_TYPE.HARDWORK];
        } else if (data.codeCount > 2000) {
            return titleMap[TITLE_TYPE.CODE];
        }
        return titleMap[TITLE_TYPE.DEFAULT];
    }

    return (
        <>
            <div className={`content-text animate__animated ${show ? 'animate-delay-700ms animate__zoomIn' : 'animate__fadeOut'}`}>
                在过去这一年，我们一同在开源学习的海洋里乘风破浪，每位成员都以独特的方式为 Datawhale 的发展添砖加瓦。
            </div>
            <div className={`content-text animate__animated ${show ? 'animate-delay-1400ms animate__zoomIn' : 'animate__fadeOut'}`}>
                今年
                <span className="content-text-primary">
                    {` ${data.username} `}
                </span>
                的称号是：
            </div>
            <div className={`content-text-summary-title animate__animated ${show ? 'animate-delay-2100ms animate__zoomIn' : 'animate__fadeOut'}`}>
                {`${getTitle()}`}
            </div>
            <div className={`content-text animate__animated ${show ? 'animate-delay-2800ms animate__zoomIn' : 'animate__fadeOut'}`}>
                愿大家在新的一年，以梦为舟，以勤为桨，于开源学习与AI的浪潮中勇立潮头！
            </div>
        </>
    );
}