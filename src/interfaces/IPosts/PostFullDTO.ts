import {PostDTO} from "./PostDTO.ts";
import {CommentDTO} from "./CommentDTO.ts";

export interface PostFullDTO extends PostDTO {
    comments: CommentDTO[];
}