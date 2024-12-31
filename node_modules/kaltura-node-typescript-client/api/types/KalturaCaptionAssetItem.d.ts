import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCaptionAsset } from './KalturaCaptionAsset';
import { KalturaBaseEntry } from './KalturaBaseEntry';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaCaptionAssetItemArgs extends KalturaObjectBaseArgs {
    asset?: KalturaCaptionAsset;
    entry?: KalturaBaseEntry;
    startTime?: number;
    endTime?: number;
    content?: string;
}
export declare class KalturaCaptionAssetItem extends KalturaObjectBase {
    asset: KalturaCaptionAsset;
    entry: KalturaBaseEntry;
    startTime: number;
    endTime: number;
    content: string;
    constructor(data?: KalturaCaptionAssetItemArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
