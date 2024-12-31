import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaDistributionThumbDimensionsArgs extends KalturaObjectBaseArgs {
    width?: number;
    height?: number;
}
export declare class KalturaDistributionThumbDimensions extends KalturaObjectBase {
    width: number;
    height: number;
    constructor(data?: KalturaDistributionThumbDimensionsArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
