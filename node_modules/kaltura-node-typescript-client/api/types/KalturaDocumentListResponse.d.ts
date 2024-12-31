import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDocumentEntry } from './KalturaDocumentEntry';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';
export interface KalturaDocumentListResponseArgs extends KalturaListResponseArgs {
}
export declare class KalturaDocumentListResponse extends KalturaListResponse {
    readonly objects: KalturaDocumentEntry[];
    constructor(data?: KalturaDocumentListResponseArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
