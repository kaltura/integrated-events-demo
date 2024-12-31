import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaResponseProfile } from './KalturaResponseProfile';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';
export interface KalturaResponseProfileListResponseArgs extends KalturaListResponseArgs {
}
export declare class KalturaResponseProfileListResponse extends KalturaListResponse {
    readonly objects: KalturaResponseProfile[];
    constructor(data?: KalturaResponseProfileListResponseArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
