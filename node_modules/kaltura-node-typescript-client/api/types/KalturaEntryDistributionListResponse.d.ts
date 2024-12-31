import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEntryDistribution } from './KalturaEntryDistribution';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';
export interface KalturaEntryDistributionListResponseArgs extends KalturaListResponseArgs {
}
export declare class KalturaEntryDistributionListResponse extends KalturaListResponse {
    readonly objects: KalturaEntryDistribution[];
    constructor(data?: KalturaEntryDistributionListResponseArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
