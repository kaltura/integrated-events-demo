import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaThumbParams } from './KalturaThumbParams';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';
export interface KalturaThumbParamsListResponseArgs extends KalturaListResponseArgs {
}
export declare class KalturaThumbParamsListResponse extends KalturaListResponse {
    readonly objects: KalturaThumbParams[];
    constructor(data?: KalturaThumbParamsListResponseArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
