import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFlavorParamsOutput, KalturaFlavorParamsOutputArgs } from './KalturaFlavorParamsOutput';
export interface KalturaImageFlavorParamsOutputArgs extends KalturaFlavorParamsOutputArgs {
    densityWidth?: number;
    densityHeight?: number;
    sizeWidth?: number;
    sizeHeight?: number;
    depth?: number;
}
export declare class KalturaImageFlavorParamsOutput extends KalturaFlavorParamsOutput {
    densityWidth: number;
    densityHeight: number;
    sizeWidth: number;
    sizeHeight: number;
    depth: number;
    constructor(data?: KalturaImageFlavorParamsOutputArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
