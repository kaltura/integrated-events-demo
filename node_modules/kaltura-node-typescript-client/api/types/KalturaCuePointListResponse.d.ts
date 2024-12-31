import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCuePoint } from './KalturaCuePoint';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';
export interface KalturaCuePointListResponseArgs extends KalturaListResponseArgs {
}
export declare class KalturaCuePointListResponse extends KalturaListResponse {
    readonly objects: KalturaCuePoint[];
    constructor(data?: KalturaCuePointListResponseArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
