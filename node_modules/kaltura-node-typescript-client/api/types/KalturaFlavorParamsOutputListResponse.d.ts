import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFlavorParamsOutput } from './KalturaFlavorParamsOutput';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';
export interface KalturaFlavorParamsOutputListResponseArgs extends KalturaListResponseArgs {
}
export declare class KalturaFlavorParamsOutputListResponse extends KalturaListResponse {
    readonly objects: KalturaFlavorParamsOutput[];
    constructor(data?: KalturaFlavorParamsOutputListResponseArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
