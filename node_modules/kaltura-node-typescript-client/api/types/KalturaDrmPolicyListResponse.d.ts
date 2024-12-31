import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDrmPolicy } from './KalturaDrmPolicy';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';
export interface KalturaDrmPolicyListResponseArgs extends KalturaListResponseArgs {
}
export declare class KalturaDrmPolicyListResponse extends KalturaListResponse {
    readonly objects: KalturaDrmPolicy[];
    constructor(data?: KalturaDrmPolicyListResponseArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
