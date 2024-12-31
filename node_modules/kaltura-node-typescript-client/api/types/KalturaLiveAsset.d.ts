import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFlavorAsset, KalturaFlavorAssetArgs } from './KalturaFlavorAsset';
export interface KalturaLiveAssetArgs extends KalturaFlavorAssetArgs {
    multicastIP?: string;
    multicastPort?: number;
}
export declare class KalturaLiveAsset extends KalturaFlavorAsset {
    multicastIP: string;
    multicastPort: number;
    constructor(data?: KalturaLiveAssetArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
