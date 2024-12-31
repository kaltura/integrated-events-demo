import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAttributeCondition, KalturaAttributeConditionArgs } from './KalturaAttributeCondition';
export interface KalturaSearchMatchAttributeConditionArgs extends KalturaAttributeConditionArgs {
    not?: boolean;
}
export declare class KalturaSearchMatchAttributeCondition extends KalturaAttributeCondition {
    not: boolean;
    constructor(data?: KalturaSearchMatchAttributeConditionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
