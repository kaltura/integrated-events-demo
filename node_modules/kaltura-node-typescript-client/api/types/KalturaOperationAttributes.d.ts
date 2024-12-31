import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaOperationAttributesArgs extends KalturaObjectBaseArgs {
}
export declare class KalturaOperationAttributes extends KalturaObjectBase {
    constructor(data?: KalturaOperationAttributesArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
