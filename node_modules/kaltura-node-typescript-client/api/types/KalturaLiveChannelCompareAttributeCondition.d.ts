import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveChannelCompareAttribute } from './KalturaLiveChannelCompareAttribute';
import { KalturaSearchComparableAttributeCondition, KalturaSearchComparableAttributeConditionArgs } from './KalturaSearchComparableAttributeCondition';
export interface KalturaLiveChannelCompareAttributeConditionArgs extends KalturaSearchComparableAttributeConditionArgs {
    attribute?: KalturaLiveChannelCompareAttribute;
}
export declare class KalturaLiveChannelCompareAttributeCondition extends KalturaSearchComparableAttributeCondition {
    attribute: KalturaLiveChannelCompareAttribute;
    constructor(data?: KalturaLiveChannelCompareAttributeConditionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
