import { UserDTO } from "../IUSers/UserDTO";

export interface CommunityFullDTO {
    id: string;
    createTime: string;
    name: string;
    description: string | null;
    isClosed: boolean;
    subscribersCount: number;
    administrators: UserDTO[]
}