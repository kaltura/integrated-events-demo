import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMediaInfo } from './KalturaMediaInfo';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';
export interface KalturaMediaInfoListResponseArgs extends KalturaListResponseArgs {
}
export declare class KalturaMediaInfoListResponse extends KalturaListResponse {
    readonly objects: KalturaMediaInfo[];
    constructor(data?: KalturaMediaInfoListResponseArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
