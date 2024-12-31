import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaFacebookCaptionDistributionInfoArgs extends KalturaObjectBaseArgs {
    language?: string;
    label?: string;
    filePath?: string;
    remoteId?: string;
    version?: string;
    assetId?: string;
}
export declare class KalturaFacebookCaptionDistributionInfo extends KalturaObjectBase {
    language: string;
    label: string;
    filePath: string;
    remoteId: string;
    version: string;
    assetId: string;
    constructor(data?: KalturaFacebookCaptionDistributionInfoArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
