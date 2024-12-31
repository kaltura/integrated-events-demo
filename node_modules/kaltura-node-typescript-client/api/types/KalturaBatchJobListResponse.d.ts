import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBatchJob } from './KalturaBatchJob';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';
export interface KalturaBatchJobListResponseArgs extends KalturaListResponseArgs {
}
export declare class KalturaBatchJobListResponse extends KalturaListResponse {
    readonly objects: KalturaBatchJob[];
    constructor(data?: KalturaBatchJobListResponseArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
