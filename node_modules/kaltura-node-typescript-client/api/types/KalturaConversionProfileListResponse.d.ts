import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaConversionProfile } from './KalturaConversionProfile';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';
export interface KalturaConversionProfileListResponseArgs extends KalturaListResponseArgs {
}
export declare class KalturaConversionProfileListResponse extends KalturaListResponse {
    readonly objects: KalturaConversionProfile[];
    constructor(data?: KalturaConversionProfileListResponseArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
