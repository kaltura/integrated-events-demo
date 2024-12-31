import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaExternalMediaEntryMatchAttribute } from './KalturaExternalMediaEntryMatchAttribute';
import { KalturaSearchMatchAttributeCondition, KalturaSearchMatchAttributeConditionArgs } from './KalturaSearchMatchAttributeCondition';
export interface KalturaExternalMediaEntryMatchAttributeConditionArgs extends KalturaSearchMatchAttributeConditionArgs {
    attribute?: KalturaExternalMediaEntryMatchAttribute;
}
export declare class KalturaExternalMediaEntryMatchAttributeCondition extends KalturaSearchMatchAttributeCondition {
    attribute: KalturaExternalMediaEntryMatchAttribute;
    constructor(data?: KalturaExternalMediaEntryMatchAttributeConditionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
