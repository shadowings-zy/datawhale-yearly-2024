import { ContentData } from "../../../../constants";
import React from 'react';
import '../../index.css';

interface IProps {
    show: boolean;
    noCommit?: boolean;
}

export const DatawhaleInfo = (props: IProps) => {
    const { show, noCommit = true } = props;

    if (noCommit) {
        return (
            <>
                <div className={`content-text animate__animated ${show ? 'animate-delay-700ms animate__zoomIn' : 'animate__fadeOut'}`}>
                    在代码的浩瀚宇宙里，或许此刻你还未留下自己的 “代码星辰”，但请相信，这只是旅程的序幕。开源的世界广袤无垠，每个人都有独特的节奏去探索、去融入。
                </div>
                <div className={`content-text animate__animated ${show ? 'animate-delay-1400ms animate__zoomIn' : 'animate__fadeOut'}`}>
                    今年Datawhale也有了飞速的增长，伴随着AI的热潮，组织仓库的总Star数今年增长
                    <span className="content-text-primary">
                        {` 4w+ `}
                    </span>
                    ，在Github上的所有知识分享类组织中，排名
                    <span className="content-text-primary">
                        {` 第7 `}
                    </span>
                    ，在国内的知识分享类组织中排名
                    <span className="content-text-primary">
                        {` 第3 `}
                    </span>
                    ，在国内 AI 开源组织里更是
                    <span className="content-text-primary">
                        {` 独占鳌头 `}
                    </span>。
                </div>
                <div className={`content-text animate__animated ${show ? 'animate-delay-2100ms animate__zoomIn' : 'animate__fadeOut'}`}>
                    每颗增长的 Star 都离不开贡献者们的努力，是大家齐心协力，用智慧与努力，在开源学习领域树起 Datawhale 的旗帜。
                </div>
            </>
        );
    }

    return (
        <>
            <div className={`content-text animate__animated ${show ? 'animate-delay-700ms animate__zoomIn' : 'animate__fadeOut'}`}>
                今年Datawhale也有了飞速的增长，伴随着AI的热潮，组织仓库的总Star数今年增长
                <span className="content-text-primary">
                    {` 4w+ `}
                </span>
                ，在Github上的所有知识分享类组织中，排名
                <span className="content-text-primary">
                    {` 第7 `}
                </span>
                ，在国内的知识分享类组织中排名
                <span className="content-text-primary">
                    {` 第3 `}
                </span>
                ，在国内 AI 开源组织里更是
                <span className="content-text-primary">
                    {` 独占鳌头 `}
                </span>。
            </div>
            <div className={`content-text animate__animated ${show ? 'animate-delay-1400ms animate__zoomIn' : 'animate__fadeOut'}`}>
                每颗增长的 Star 都离不开贡献者们的努力，是大家齐心协力，用智慧与努力，在开源学习领域树起 Datawhale 的旗帜。
            </div>
        </>
    );
}