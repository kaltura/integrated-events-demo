import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaIntegerValue } from './KalturaIntegerValue';
import { KalturaCondition, KalturaConditionArgs } from './KalturaCondition';
export interface KalturaDeliveryProfileConditionArgs extends KalturaConditionArgs {
    deliveryProfileIds?: KalturaIntegerValue[];
}
export declare class KalturaDeliveryProfileCondition extends KalturaCondition {
    deliveryProfileIds: KalturaIntegerValue[];
    constructor(data?: KalturaDeliveryProfileConditionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
