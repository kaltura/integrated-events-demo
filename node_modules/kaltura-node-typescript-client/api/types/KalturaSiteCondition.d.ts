import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMatchCondition, KalturaMatchConditionArgs } from './KalturaMatchCondition';
export interface KalturaSiteConditionArgs extends KalturaMatchConditionArgs {
}
export declare class KalturaSiteCondition extends KalturaMatchCondition {
    constructor(data?: KalturaSiteConditionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
