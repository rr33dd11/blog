import { api } from "../../axios/instance";
import {AuthorDTO} from "../../../interfaces/IAuthor/AuthorDTO.ts";

export type GetAuthorsConfig = AxiosRequestConfig;

export const getAuthors = async (requestConfig?: GetAuthorsConfig) =>
    api.get<AuthorDTO[]>('/author/list', requestConfig?.config);