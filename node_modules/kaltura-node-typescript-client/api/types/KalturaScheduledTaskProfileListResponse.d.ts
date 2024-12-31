import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaScheduledTaskProfile } from './KalturaScheduledTaskProfile';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';
export interface KalturaScheduledTaskProfileListResponseArgs extends KalturaListResponseArgs {
}
export declare class KalturaScheduledTaskProfileListResponse extends KalturaListResponse {
    readonly objects: KalturaScheduledTaskProfile[];
    constructor(data?: KalturaScheduledTaskProfileListResponseArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
