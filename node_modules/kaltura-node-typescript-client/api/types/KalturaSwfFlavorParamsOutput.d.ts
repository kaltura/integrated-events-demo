import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFlavorParamsOutput, KalturaFlavorParamsOutputArgs } from './KalturaFlavorParamsOutput';
export interface KalturaSwfFlavorParamsOutputArgs extends KalturaFlavorParamsOutputArgs {
    flashVersion?: number;
    poly2Bitmap?: boolean;
}
export declare class KalturaSwfFlavorParamsOutput extends KalturaFlavorParamsOutput {
    flashVersion: number;
    poly2Bitmap: boolean;
    constructor(data?: KalturaSwfFlavorParamsOutputArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
