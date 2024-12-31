import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFlavorParams, KalturaFlavorParamsArgs } from './KalturaFlavorParams';
export interface KalturaWidevineFlavorParamsArgs extends KalturaFlavorParamsArgs {
}
export declare class KalturaWidevineFlavorParams extends KalturaFlavorParams {
    constructor(data?: KalturaWidevineFlavorParamsArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
