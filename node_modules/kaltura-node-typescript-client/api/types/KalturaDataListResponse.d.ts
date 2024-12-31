import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDataEntry } from './KalturaDataEntry';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';
export interface KalturaDataListResponseArgs extends KalturaListResponseArgs {
}
export declare class KalturaDataListResponse extends KalturaListResponse {
    readonly objects: KalturaDataEntry[];
    constructor(data?: KalturaDataListResponseArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
