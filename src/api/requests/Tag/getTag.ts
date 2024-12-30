import { TagDTO } from "../../../interfaces/ITags/TagDTO";
import { api } from "../../axios/instance";

export type GetTagConfig = AxiosRequestConfig;

export const getTag = async (requestConfig?: GetTagConfig) =>
  api.get<TagDTO[]>('tag', requestConfig?.config);