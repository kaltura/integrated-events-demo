import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCaptionParams } from './KalturaCaptionParams';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';
export interface KalturaCaptionParamsListResponseArgs extends KalturaListResponseArgs {
}
export declare class KalturaCaptionParamsListResponse extends KalturaListResponse {
    readonly objects: KalturaCaptionParams[];
    constructor(data?: KalturaCaptionParamsListResponseArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
