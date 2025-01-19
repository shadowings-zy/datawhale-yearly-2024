import React from 'react';
import './index.css';
import { SLIDE_TYPE, ContentData } from '../../constants/index.ts';
import { Contribute } from './components/Contribute/index.tsx';
import { Project } from './components/Project/index.tsx';
import { CommitInfo } from './components/CommitInfo/index.tsx';
import { DatawhaleInfo } from './components/DatawhaleInfo/index.tsx';
import { Summary } from './components/Summary/index.tsx';

interface ContentProps {
    currentSlide: number;
    index: number;
    slideType: SLIDE_TYPE;
    data: ContentData;
}

export const Content = (props: ContentProps) => {
    const { currentSlide, index, slideType, data } = props;


    const renderContent = () => {
        if (slideType === SLIDE_TYPE.CONTRIBUTE) {
            return <Contribute data={data} show={currentSlide === index} />;
        } else if (slideType === SLIDE_TYPE.PROJECT) {
            return <Project data={data} show={currentSlide === index} />;
        } else if (slideType === SLIDE_TYPE.COMMIT_INFO) {
            return <CommitInfo data={data} show={currentSlide === index} />;
        } else if (slideType === SLIDE_TYPE.DATAWHALE_INFO) {
            return <DatawhaleInfo show={currentSlide === index} />;
        } else if (slideType === SLIDE_TYPE.SUMMARY) {
            return <Summary data={data} show={currentSlide === index} />;
        }
        return <div>slide{props.index}</div>
    }

    return (
        <div className="content" style={{ height: window.innerHeight }}>
            <div className={`${slideType === SLIDE_TYPE.SUMMARY ? 'slide-content-summary-area' : 'slide-content-area'} animate__animated ${currentSlide === index ? 'animate__fadeIn animate-delay-500ms' : 'animate__fadeOut'}`}>
                {renderContent()}
            </div>
            {slideType === SLIDE_TYPE.SUMMARY && (
                <>
                    <div className="content-text-summary-footer">                    <div className="content-text-summary-qrcode"></div>
                        <div className="content-text-summary-footer-text">
                            <div>左侧扫码查看你的</div>
                            <div>Datawhale年度报告</div>
                        </div>
                    </div>

                </>
            )}
        </div>
    );
}

