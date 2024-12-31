import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDocumentEntryMatchAttribute } from './KalturaDocumentEntryMatchAttribute';
import { KalturaSearchMatchAttributeCondition, KalturaSearchMatchAttributeConditionArgs } from './KalturaSearchMatchAttributeCondition';
export interface KalturaDocumentEntryMatchAttributeConditionArgs extends KalturaSearchMatchAttributeConditionArgs {
    attribute?: KalturaDocumentEntryMatchAttribute;
}
export declare class KalturaDocumentEntryMatchAttributeCondition extends KalturaSearchMatchAttributeCondition {
    attribute: KalturaDocumentEntryMatchAttribute;
    constructor(data?: KalturaDocumentEntryMatchAttributeConditionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
