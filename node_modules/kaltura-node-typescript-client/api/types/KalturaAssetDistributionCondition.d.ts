import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaAssetDistributionConditionArgs extends KalturaObjectBaseArgs {
}
export declare class KalturaAssetDistributionCondition extends KalturaObjectBase {
    constructor(data?: KalturaAssetDistributionConditionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
