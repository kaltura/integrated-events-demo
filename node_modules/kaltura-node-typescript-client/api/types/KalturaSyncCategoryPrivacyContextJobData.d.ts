import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaJobData, KalturaJobDataArgs } from './KalturaJobData';
export interface KalturaSyncCategoryPrivacyContextJobDataArgs extends KalturaJobDataArgs {
    categoryId?: number;
    lastUpdatedCategoryEntryCreatedAt?: number;
    lastUpdatedCategoryCreatedAt?: number;
}
export declare class KalturaSyncCategoryPrivacyContextJobData extends KalturaJobData {
    categoryId: number;
    lastUpdatedCategoryEntryCreatedAt: number;
    lastUpdatedCategoryCreatedAt: number;
    constructor(data?: KalturaSyncCategoryPrivacyContextJobDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
