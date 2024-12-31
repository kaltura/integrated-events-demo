import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSearchCondition, KalturaSearchConditionArgs } from './KalturaSearchCondition';
export interface KalturaSearchMatchConditionArgs extends KalturaSearchConditionArgs {
    not?: boolean;
}
export declare class KalturaSearchMatchCondition extends KalturaSearchCondition {
    not: boolean;
    constructor(data?: KalturaSearchMatchConditionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
