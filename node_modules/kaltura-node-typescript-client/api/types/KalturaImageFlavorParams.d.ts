import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFlavorParams, KalturaFlavorParamsArgs } from './KalturaFlavorParams';
export interface KalturaImageFlavorParamsArgs extends KalturaFlavorParamsArgs {
    densityWidth?: number;
    densityHeight?: number;
    sizeWidth?: number;
    sizeHeight?: number;
    depth?: number;
}
export declare class KalturaImageFlavorParams extends KalturaFlavorParams {
    densityWidth: number;
    densityHeight: number;
    sizeWidth: number;
    sizeHeight: number;
    depth: number;
    constructor(data?: KalturaImageFlavorParamsArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
