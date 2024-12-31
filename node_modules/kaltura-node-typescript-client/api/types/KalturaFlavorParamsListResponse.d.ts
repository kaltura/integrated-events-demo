import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFlavorParams } from './KalturaFlavorParams';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';
export interface KalturaFlavorParamsListResponseArgs extends KalturaListResponseArgs {
}
export declare class KalturaFlavorParamsListResponse extends KalturaListResponse {
    readonly objects: KalturaFlavorParams[];
    constructor(data?: KalturaFlavorParamsListResponseArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
