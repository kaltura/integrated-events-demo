import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBulkUploadResult, KalturaBulkUploadResultArgs } from './KalturaBulkUploadResult';
export interface KalturaBulkUploadResultCategoryArgs extends KalturaBulkUploadResultArgs {
    relativePath?: string;
    name?: string;
    referenceId?: string;
    description?: string;
    tags?: string;
    appearInList?: number;
    privacy?: number;
    inheritanceType?: number;
    userJoinPolicy?: number;
    defaultPermissionLevel?: number;
    owner?: string;
    contributionPolicy?: number;
    partnerSortValue?: number;
    moderation?: boolean;
}
export declare class KalturaBulkUploadResultCategory extends KalturaBulkUploadResult {
    relativePath: string;
    name: string;
    referenceId: string;
    description: string;
    tags: string;
    appearInList: number;
    privacy: number;
    inheritanceType: number;
    userJoinPolicy: number;
    defaultPermissionLevel: number;
    owner: string;
    contributionPolicy: number;
    partnerSortValue: number;
    moderation: boolean;
    constructor(data?: KalturaBulkUploadResultCategoryArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
