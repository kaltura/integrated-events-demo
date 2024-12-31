import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaFlavorAssetUrlOptionsArgs extends KalturaObjectBaseArgs {
    fileName?: string;
    referrer?: string;
}
export declare class KalturaFlavorAssetUrlOptions extends KalturaObjectBase {
    fileName: string;
    referrer: string;
    constructor(data?: KalturaFlavorAssetUrlOptionsArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
