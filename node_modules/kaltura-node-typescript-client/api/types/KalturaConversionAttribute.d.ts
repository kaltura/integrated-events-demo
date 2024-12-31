import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaConversionAttributeArgs extends KalturaObjectBaseArgs {
    flavorParamsId?: number;
    name?: string;
    value?: string;
}
export declare class KalturaConversionAttribute extends KalturaObjectBase {
    flavorParamsId: number;
    name: string;
    value: string;
    constructor(data?: KalturaConversionAttributeArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
