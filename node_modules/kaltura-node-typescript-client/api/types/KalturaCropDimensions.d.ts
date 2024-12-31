import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaCropDimensionsArgs extends KalturaObjectBaseArgs {
    left?: number;
    top?: number;
    width?: number;
    height?: number;
}
export declare class KalturaCropDimensions extends KalturaObjectBase {
    left: number;
    top: number;
    width: number;
    height: number;
    constructor(data?: KalturaCropDimensionsArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
