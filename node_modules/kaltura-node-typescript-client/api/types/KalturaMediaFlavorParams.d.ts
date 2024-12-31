import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFlavorParams, KalturaFlavorParamsArgs } from './KalturaFlavorParams';
export interface KalturaMediaFlavorParamsArgs extends KalturaFlavorParamsArgs {
}
export declare class KalturaMediaFlavorParams extends KalturaFlavorParams {
    constructor(data?: KalturaMediaFlavorParamsArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
