import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDataEntryMatchAttribute } from './KalturaDataEntryMatchAttribute';
import { KalturaSearchMatchAttributeCondition, KalturaSearchMatchAttributeConditionArgs } from './KalturaSearchMatchAttributeCondition';
export interface KalturaDataEntryMatchAttributeConditionArgs extends KalturaSearchMatchAttributeConditionArgs {
    attribute?: KalturaDataEntryMatchAttribute;
}
export declare class KalturaDataEntryMatchAttributeCondition extends KalturaSearchMatchAttributeCondition {
    attribute: KalturaDataEntryMatchAttribute;
    constructor(data?: KalturaDataEntryMatchAttributeConditionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
