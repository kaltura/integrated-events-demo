import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionFieldConfig } from './KalturaDistributionFieldConfig';
import { KalturaExtendingItemMrssParameter } from './KalturaExtendingItemMrssParameter';
import { KalturaDistributionProfile, KalturaDistributionProfileArgs } from './KalturaDistributionProfile';
export interface KalturaConfigurableDistributionProfileArgs extends KalturaDistributionProfileArgs {
    fieldConfigArray?: KalturaDistributionFieldConfig[];
    itemXpathsToExtend?: KalturaExtendingItemMrssParameter[];
    useCategoryEntries?: boolean;
}
export declare class KalturaConfigurableDistributionProfile extends KalturaDistributionProfile {
    fieldConfigArray: KalturaDistributionFieldConfig[];
    itemXpathsToExtend: KalturaExtendingItemMrssParameter[];
    useCategoryEntries: boolean;
    constructor(data?: KalturaConfigurableDistributionProfileArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
