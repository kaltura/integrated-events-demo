import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaThumbParamsOutput } from './KalturaThumbParamsOutput';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';
export interface KalturaThumbParamsOutputListResponseArgs extends KalturaListResponseArgs {
}
export declare class KalturaThumbParamsOutputListResponse extends KalturaListResponse {
    readonly objects: KalturaThumbParamsOutput[];
    constructor(data?: KalturaThumbParamsOutputListResponseArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
