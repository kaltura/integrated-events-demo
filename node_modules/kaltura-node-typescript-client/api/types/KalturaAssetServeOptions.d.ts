import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaAssetServeOptionsArgs extends KalturaObjectBaseArgs {
    download?: boolean;
    referrer?: string;
}
export declare class KalturaAssetServeOptions extends KalturaObjectBase {
    download: boolean;
    referrer: string;
    constructor(data?: KalturaAssetServeOptionsArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
