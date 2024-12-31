import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDrmProfile } from './KalturaDrmProfile';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';
export interface KalturaDrmProfileListResponseArgs extends KalturaListResponseArgs {
}
export declare class KalturaDrmProfileListResponse extends KalturaListResponse {
    readonly objects: KalturaDrmProfile[];
    constructor(data?: KalturaDrmProfileListResponseArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
