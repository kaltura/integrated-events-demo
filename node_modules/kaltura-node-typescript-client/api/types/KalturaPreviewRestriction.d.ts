import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSessionRestriction, KalturaSessionRestrictionArgs } from './KalturaSessionRestriction';
export interface KalturaPreviewRestrictionArgs extends KalturaSessionRestrictionArgs {
    previewLength?: number;
}
export declare class KalturaPreviewRestriction extends KalturaSessionRestriction {
    previewLength: number;
    constructor(data?: KalturaPreviewRestrictionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
