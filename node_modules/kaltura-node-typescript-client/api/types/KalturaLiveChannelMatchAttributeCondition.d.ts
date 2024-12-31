import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveChannelMatchAttribute } from './KalturaLiveChannelMatchAttribute';
import { KalturaSearchMatchAttributeCondition, KalturaSearchMatchAttributeConditionArgs } from './KalturaSearchMatchAttributeCondition';
export interface KalturaLiveChannelMatchAttributeConditionArgs extends KalturaSearchMatchAttributeConditionArgs {
    attribute?: KalturaLiveChannelMatchAttribute;
}
export declare class KalturaLiveChannelMatchAttributeCondition extends KalturaSearchMatchAttributeCondition {
    attribute: KalturaLiveChannelMatchAttribute;
    constructor(data?: KalturaLiveChannelMatchAttributeConditionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
