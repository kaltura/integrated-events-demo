import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaThumbAsset, KalturaThumbAssetArgs } from './KalturaThumbAsset';
export interface KalturaTimedThumbAssetArgs extends KalturaThumbAssetArgs {
    cuePointId?: string;
}
export declare class KalturaTimedThumbAsset extends KalturaThumbAsset {
    cuePointId: string;
    constructor(data?: KalturaTimedThumbAssetArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
