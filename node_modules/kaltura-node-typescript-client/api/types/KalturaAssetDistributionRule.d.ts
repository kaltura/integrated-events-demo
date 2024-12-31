import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAssetDistributionCondition } from './KalturaAssetDistributionCondition';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaAssetDistributionRuleArgs extends KalturaObjectBaseArgs {
    validationError?: string;
    assetDistributionConditions?: KalturaAssetDistributionCondition[];
}
export declare class KalturaAssetDistributionRule extends KalturaObjectBase {
    validationError: string;
    assetDistributionConditions: KalturaAssetDistributionCondition[];
    constructor(data?: KalturaAssetDistributionRuleArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
