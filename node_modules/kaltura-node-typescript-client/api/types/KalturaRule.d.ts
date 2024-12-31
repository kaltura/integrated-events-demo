import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRuleAction } from './KalturaRuleAction';
import { KalturaCondition } from './KalturaCondition';
import { KalturaContextTypeHolder } from './KalturaContextTypeHolder';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaRuleArgs extends KalturaObjectBaseArgs {
    description?: string;
    ruleData?: string;
    message?: string;
    code?: string;
    actions?: KalturaRuleAction[];
    conditions?: KalturaCondition[];
    contexts?: KalturaContextTypeHolder[];
    stopProcessing?: boolean;
    forceAdminValidation?: KalturaNullableBoolean;
}
export declare class KalturaRule extends KalturaObjectBase {
    description: string;
    ruleData: string;
    message: string;
    code: string;
    actions: KalturaRuleAction[];
    conditions: KalturaCondition[];
    contexts: KalturaContextTypeHolder[];
    stopProcessing: boolean;
    forceAdminValidation: KalturaNullableBoolean;
    constructor(data?: KalturaRuleArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
