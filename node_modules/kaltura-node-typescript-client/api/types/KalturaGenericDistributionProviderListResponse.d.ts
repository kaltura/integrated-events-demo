import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaGenericDistributionProvider } from './KalturaGenericDistributionProvider';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';
export interface KalturaGenericDistributionProviderListResponseArgs extends KalturaListResponseArgs {
}
export declare class KalturaGenericDistributionProviderListResponse extends KalturaListResponse {
    readonly objects: KalturaGenericDistributionProvider[];
    constructor(data?: KalturaGenericDistributionProviderListResponseArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
