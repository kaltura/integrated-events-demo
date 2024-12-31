import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaGenericDistributionProviderAction } from './KalturaGenericDistributionProviderAction';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';
export interface KalturaGenericDistributionProviderActionListResponseArgs extends KalturaListResponseArgs {
}
export declare class KalturaGenericDistributionProviderActionListResponse extends KalturaListResponse {
    readonly objects: KalturaGenericDistributionProviderAction[];
    constructor(data?: KalturaGenericDistributionProviderActionListResponseArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
