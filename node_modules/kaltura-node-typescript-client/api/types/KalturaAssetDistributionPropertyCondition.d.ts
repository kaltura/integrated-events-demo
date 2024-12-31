import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAssetDistributionCondition, KalturaAssetDistributionConditionArgs } from './KalturaAssetDistributionCondition';
export interface KalturaAssetDistributionPropertyConditionArgs extends KalturaAssetDistributionConditionArgs {
    propertyName?: string;
    propertyValue?: string;
}
export declare class KalturaAssetDistributionPropertyCondition extends KalturaAssetDistributionCondition {
    propertyName: string;
    propertyValue: string;
    constructor(data?: KalturaAssetDistributionPropertyConditionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
