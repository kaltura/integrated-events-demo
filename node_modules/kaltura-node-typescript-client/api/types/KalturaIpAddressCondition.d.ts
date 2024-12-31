import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMatchCondition, KalturaMatchConditionArgs } from './KalturaMatchCondition';
export interface KalturaIpAddressConditionArgs extends KalturaMatchConditionArgs {
    acceptInternalIps?: boolean;
    httpHeader?: string;
}
export declare class KalturaIpAddressCondition extends KalturaMatchCondition {
    acceptInternalIps: boolean;
    httpHeader: string;
    constructor(data?: KalturaIpAddressConditionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
