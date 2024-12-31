import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFlavorParams, KalturaFlavorParamsArgs } from './KalturaFlavorParams';
export interface KalturaSwfFlavorParamsArgs extends KalturaFlavorParamsArgs {
    flashVersion?: number;
    poly2Bitmap?: boolean;
}
export declare class KalturaSwfFlavorParams extends KalturaFlavorParams {
    flashVersion: number;
    poly2Bitmap: boolean;
    constructor(data?: KalturaSwfFlavorParamsArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
