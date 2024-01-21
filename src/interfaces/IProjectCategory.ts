import IProjectPost from "./IProjectPost";

export default interface IProjectCategory {
    title: string;
    url: string;
    otherCategories: IProjectCategory[];
    posts: IProjectPost[];
}