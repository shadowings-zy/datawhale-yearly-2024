export enum SLIDE_TYPE {
    CONTRIBUTE = 'CONTRIBUTE', // 贡献了几个项目，提交了多少commit，提交了多少代码
    PROJECT = 'PROJECT', // 参与的项目有多少star，今年增长了多少
    COMMIT_INFO = 'COMMIT_INFO', // 最晚的commit，提交commit最多的项目
    DATAWHALE_INFO = 'DATAWHALE_INFO', // 介绍datawhale的进展的页面
    SUMMARY = 'SUMMARY', // 总结
}

export enum PAGE_TYPE {
    WELCOME = 'WELCOME', // 欢迎页
    CONTENT = 'CONTENT', // 内容页
}


export interface ProjectData {
    name: string;
    yearGrowth: number;
    starCount: number;
}

export interface ContentData {
    username: string;
    email: string;
    project: ProjectData[];
    commitCount: number;
    codeCount: number;
    maxCommitProject: ProjectData;
    maxCommitProjectCommitCount: number;
    lastCommitTime?: string;
}

export enum TITLE_TYPE {
    CONTRIBUTE = 'CONTRIBUTE', // 参与项目star数增长超过2000
    PROJECT = 'PROJECT', // 参与的项目超过3个
    HARDWORK = 'HARDWORK', // 在较晚时间提交过代码
    CODE = 'CODE', // 提交代码超过2000行
    DEFAULT = 'DEFAULT', // 总结
}

export const titleMap = {
    [TITLE_TYPE.CONTRIBUTE]: 'Star引领者',
    [TITLE_TYPE.PROJECT]: '仓库贡献达人',
    [TITLE_TYPE.CODE]: '代码高产贡献者',
    [TITLE_TYPE.HARDWORK]: '深夜代码领航员',
    [TITLE_TYPE.DEFAULT]: '潜力开源贡献者',
}


export interface SlideData {
    slideType: SLIDE_TYPE;
}