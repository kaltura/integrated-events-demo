import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCondition, KalturaConditionArgs } from './KalturaCondition';
export interface KalturaUserRoleConditionArgs extends KalturaConditionArgs {
    roleIds?: string;
}
export declare class KalturaUserRoleCondition extends KalturaCondition {
    roleIds: string;
    constructor(data?: KalturaUserRoleConditionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
