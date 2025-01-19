import { ContentData } from "../../../../constants";
import React from 'react';
import '../../index.css';

interface IProps {
    data: ContentData;
    show: boolean;
}

export const CommitInfo = (props: IProps) => {
    const { data, show } = props;
    return (
        <>
            <div className={`content-text animate__animated ${show ? 'animate-delay-700ms animate__zoomIn' : 'animate__fadeOut'}`}>
                在众多项目中，
                <span className="content-text-primary">
                    {` ${data.maxCommitProject.name} `}
                </span>
                成为了你倾注心血最多的地方。你在这个项目里提交了
                <span className="content-text-primary">
                    {` ${data.maxCommitProjectCommitCount} `}
                </span>
                次 Commit，远远超过其他项目。该项目犹如一座宏伟的建筑，而你每一次的 Commit 都是一块不可或缺的砖石。
            </div>
            {data.lastCommitTime &&
                (<div className={`content-text animate__animated ${show ? 'animate-delay-1400ms animate__zoomIn' : 'animate__fadeOut'}`}>
                    在代码的漫漫长路上，有一个时刻格外闪耀。你最晚一次提交 Commit 发生在
                    <span className="content-text-primary">
                        {` ${data.lastCommitTime} `}
                    </span>
                    ，那时大多数人或许已进入梦乡，但你仍坚守在电脑前，专注于代码的世界。熬夜一时爽，但也需要保重身体哦~
                </div>)
            }
        </>
    );
}