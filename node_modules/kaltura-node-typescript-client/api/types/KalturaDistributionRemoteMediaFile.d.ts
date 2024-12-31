import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaDistributionRemoteMediaFileArgs extends KalturaObjectBaseArgs {
    version?: string;
    assetId?: string;
    remoteId?: string;
}
export declare class KalturaDistributionRemoteMediaFile extends KalturaObjectBase {
    version: string;
    assetId: string;
    remoteId: string;
    constructor(data?: KalturaDistributionRemoteMediaFileArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
