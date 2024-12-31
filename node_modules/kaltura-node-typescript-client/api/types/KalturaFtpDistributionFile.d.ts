import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaFtpDistributionFileArgs extends KalturaObjectBaseArgs {
    assetId?: string;
    filename?: string;
    contents?: string;
    localFilePath?: string;
    version?: string;
    hash?: string;
}
export declare class KalturaFtpDistributionFile extends KalturaObjectBase {
    assetId: string;
    filename: string;
    contents: string;
    localFilePath: string;
    version: string;
    hash: string;
    constructor(data?: KalturaFtpDistributionFileArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
