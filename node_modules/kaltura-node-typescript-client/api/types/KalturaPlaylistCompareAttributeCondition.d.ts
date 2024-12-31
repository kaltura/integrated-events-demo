import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPlaylistCompareAttribute } from './KalturaPlaylistCompareAttribute';
import { KalturaSearchComparableAttributeCondition, KalturaSearchComparableAttributeConditionArgs } from './KalturaSearchComparableAttributeCondition';
export interface KalturaPlaylistCompareAttributeConditionArgs extends KalturaSearchComparableAttributeConditionArgs {
    attribute?: KalturaPlaylistCompareAttribute;
}
export declare class KalturaPlaylistCompareAttributeCondition extends KalturaSearchComparableAttributeCondition {
    attribute: KalturaPlaylistCompareAttribute;
    constructor(data?: KalturaPlaylistCompareAttributeConditionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
