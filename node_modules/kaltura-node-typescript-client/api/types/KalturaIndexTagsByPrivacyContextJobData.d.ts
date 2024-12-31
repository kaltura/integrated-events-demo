import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaJobData, KalturaJobDataArgs } from './KalturaJobData';
export interface KalturaIndexTagsByPrivacyContextJobDataArgs extends KalturaJobDataArgs {
    changedCategoryId?: number;
    deletedPrivacyContexts?: string;
    addedPrivacyContexts?: string;
}
export declare class KalturaIndexTagsByPrivacyContextJobData extends KalturaJobData {
    changedCategoryId: number;
    deletedPrivacyContexts: string;
    addedPrivacyContexts: string;
    constructor(data?: KalturaIndexTagsByPrivacyContextJobDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
