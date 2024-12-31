import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPlayableEntryMatchAttribute } from './KalturaPlayableEntryMatchAttribute';
import { KalturaSearchMatchAttributeCondition, KalturaSearchMatchAttributeConditionArgs } from './KalturaSearchMatchAttributeCondition';
export interface KalturaPlayableEntryMatchAttributeConditionArgs extends KalturaSearchMatchAttributeConditionArgs {
    attribute?: KalturaPlayableEntryMatchAttribute;
}
export declare class KalturaPlayableEntryMatchAttributeCondition extends KalturaSearchMatchAttributeCondition {
    attribute: KalturaPlayableEntryMatchAttribute;
    constructor(data?: KalturaPlayableEntryMatchAttributeConditionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
