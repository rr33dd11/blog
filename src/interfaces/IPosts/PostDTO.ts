import { TagDTO } from "../ITags/TagDTO";

export interface PostDTO {
    id: string;
    createTime: string;
    title: string;
    description: string;
    readingTime: number;
    image: string | null;
    authorId: string;
    author: string;
    communityId: string | null;
    communityName: string | null;
    addressId: string | null;
    likes: number;
    hasLike: boolean;
    commentsCount: number;
    tags: TagDTO[] | null;
}