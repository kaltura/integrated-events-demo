import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveStreamAdminEntryMatchAttribute } from './KalturaLiveStreamAdminEntryMatchAttribute';
import { KalturaSearchMatchAttributeCondition, KalturaSearchMatchAttributeConditionArgs } from './KalturaSearchMatchAttributeCondition';
export interface KalturaLiveStreamAdminEntryMatchAttributeConditionArgs extends KalturaSearchMatchAttributeConditionArgs {
    attribute?: KalturaLiveStreamAdminEntryMatchAttribute;
}
export declare class KalturaLiveStreamAdminEntryMatchAttributeCondition extends KalturaSearchMatchAttributeCondition {
    attribute: KalturaLiveStreamAdminEntryMatchAttribute;
    constructor(data?: KalturaLiveStreamAdminEntryMatchAttributeConditionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
