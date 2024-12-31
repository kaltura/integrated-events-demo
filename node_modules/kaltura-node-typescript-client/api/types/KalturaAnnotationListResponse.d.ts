import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAnnotation } from './KalturaAnnotation';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';
export interface KalturaAnnotationListResponseArgs extends KalturaListResponseArgs {
}
export declare class KalturaAnnotationListResponse extends KalturaListResponse {
    readonly objects: KalturaAnnotation[];
    constructor(data?: KalturaAnnotationListResponseArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
