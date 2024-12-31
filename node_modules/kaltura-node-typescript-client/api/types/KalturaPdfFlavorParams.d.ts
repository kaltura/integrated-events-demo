import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFlavorParams, KalturaFlavorParamsArgs } from './KalturaFlavorParams';
export interface KalturaPdfFlavorParamsArgs extends KalturaFlavorParamsArgs {
    readonly?: boolean;
}
export declare class KalturaPdfFlavorParams extends KalturaFlavorParams {
    readonly: boolean;
    constructor(data?: KalturaPdfFlavorParamsArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
