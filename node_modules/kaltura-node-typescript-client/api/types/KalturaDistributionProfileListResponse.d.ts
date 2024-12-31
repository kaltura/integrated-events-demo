import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionProfile } from './KalturaDistributionProfile';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';
export interface KalturaDistributionProfileListResponseArgs extends KalturaListResponseArgs {
}
export declare class KalturaDistributionProfileListResponse extends KalturaListResponse {
    readonly objects: KalturaDistributionProfile[];
    constructor(data?: KalturaDistributionProfileListResponseArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
