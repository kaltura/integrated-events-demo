import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSearchItem, KalturaSearchItemArgs } from './KalturaSearchItem';
export interface KalturaForensicWatermarkAdvancedFilterArgs extends KalturaSearchItemArgs {
    watermarkId?: number;
}
export declare class KalturaForensicWatermarkAdvancedFilter extends KalturaSearchItem {
    watermarkId: number;
    constructor(data?: KalturaForensicWatermarkAdvancedFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
