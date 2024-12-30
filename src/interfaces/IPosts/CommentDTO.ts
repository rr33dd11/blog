export interface CommentDTO {
    id: string;
    createTime: string;
    content: string;
    modifiedDate?: string;
    deleteDate?: string;
    authorId: string;
    author: string;
    subComments: number;
}