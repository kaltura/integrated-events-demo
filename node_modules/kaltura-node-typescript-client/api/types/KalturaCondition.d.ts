import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaConditionType } from './KalturaConditionType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaConditionArgs extends KalturaObjectBaseArgs {
    description?: string;
    not?: boolean;
}
export declare class KalturaCondition extends KalturaObjectBase {
    readonly type: KalturaConditionType;
    description: string;
    not: boolean;
    constructor(data?: KalturaConditionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
