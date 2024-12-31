import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAssetType } from './KalturaAssetType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaAttUverseDistributionFileArgs extends KalturaObjectBaseArgs {
    remoteFilename?: string;
    localFilePath?: string;
    assetType?: KalturaAssetType;
    assetId?: string;
}
export declare class KalturaAttUverseDistributionFile extends KalturaObjectBase {
    remoteFilename: string;
    localFilePath: string;
    assetType: KalturaAssetType;
    assetId: string;
    constructor(data?: KalturaAttUverseDistributionFileArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
