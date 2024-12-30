export interface CommunityDTO {
    id: string;
    createTime: string;
    name: string;
    description: string | null;
    isClosed: boolean;
    subscribersCount: number;
}