import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaShortLink } from './KalturaShortLink';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';
export interface KalturaShortLinkListResponseArgs extends KalturaListResponseArgs {
}
export declare class KalturaShortLinkListResponse extends KalturaListResponse {
    readonly objects: KalturaShortLink[];
    constructor(data?: KalturaShortLinkListResponseArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
