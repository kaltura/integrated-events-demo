import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFlavorAsset, KalturaFlavorAssetArgs } from './KalturaFlavorAsset';
export interface KalturaWidevineFlavorAssetArgs extends KalturaFlavorAssetArgs {
    widevineDistributionStartDate?: number;
    widevineDistributionEndDate?: number;
    widevineAssetId?: number;
}
export declare class KalturaWidevineFlavorAsset extends KalturaFlavorAsset {
    widevineDistributionStartDate: number;
    widevineDistributionEndDate: number;
    widevineAssetId: number;
    constructor(data?: KalturaWidevineFlavorAssetArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
