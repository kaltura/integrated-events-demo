import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveStreamAdminEntryCompareAttribute } from './KalturaLiveStreamAdminEntryCompareAttribute';
import { KalturaSearchComparableAttributeCondition, KalturaSearchComparableAttributeConditionArgs } from './KalturaSearchComparableAttributeCondition';
export interface KalturaLiveStreamAdminEntryCompareAttributeConditionArgs extends KalturaSearchComparableAttributeConditionArgs {
    attribute?: KalturaLiveStreamAdminEntryCompareAttribute;
}
export declare class KalturaLiveStreamAdminEntryCompareAttributeCondition extends KalturaSearchComparableAttributeCondition {
    attribute: KalturaLiveStreamAdminEntryCompareAttribute;
    constructor(data?: KalturaLiveStreamAdminEntryCompareAttributeConditionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
