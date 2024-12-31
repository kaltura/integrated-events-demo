import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCategory } from './KalturaCategory';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';
export interface KalturaCategoryListResponseArgs extends KalturaListResponseArgs {
}
export declare class KalturaCategoryListResponse extends KalturaListResponse {
    readonly objects: KalturaCategory[];
    constructor(data?: KalturaCategoryListResponseArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
