import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaModerationFlag } from './KalturaModerationFlag';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';
export interface KalturaModerationFlagListResponseArgs extends KalturaListResponseArgs {
}
export declare class KalturaModerationFlagListResponse extends KalturaListResponse {
    readonly objects: KalturaModerationFlag[];
    constructor(data?: KalturaModerationFlagListResponseArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
