import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionProvider } from './KalturaDistributionProvider';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';
export interface KalturaDistributionProviderListResponseArgs extends KalturaListResponseArgs {
}
export declare class KalturaDistributionProviderListResponse extends KalturaListResponse {
    readonly objects: KalturaDistributionProvider[];
    constructor(data?: KalturaDistributionProviderListResponseArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
