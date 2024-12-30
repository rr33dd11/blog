import {GarAddressLevel} from "./GarAddressLevel.ts";

export interface SearchAddressModel {
    objectId: number
    objectGuid: string
    text?: string
    objectLevel: GarAddressLevel,
    objectLevelText: string
}