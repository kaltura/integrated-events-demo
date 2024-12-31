import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCondition, KalturaConditionArgs } from './KalturaCondition';
export interface KalturaHashConditionArgs extends KalturaConditionArgs {
    hashName?: string;
    hashSecret?: string;
}
export declare class KalturaHashCondition extends KalturaCondition {
    hashName: string;
    hashSecret: string;
    constructor(data?: KalturaHashConditionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
