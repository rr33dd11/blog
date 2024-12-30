import {CommunityRole} from "../../enums/CommunityRole.ts";

export interface CommunityUserDTO {
    userId?: string;
    communityId: string;
    role?: CommunityRole
}