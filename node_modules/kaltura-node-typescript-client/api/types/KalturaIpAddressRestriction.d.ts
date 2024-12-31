import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaIpAddressRestrictionType } from './KalturaIpAddressRestrictionType';
import { KalturaBaseRestriction, KalturaBaseRestrictionArgs } from './KalturaBaseRestriction';
export interface KalturaIpAddressRestrictionArgs extends KalturaBaseRestrictionArgs {
    ipAddressRestrictionType?: KalturaIpAddressRestrictionType;
    ipAddressList?: string;
}
export declare class KalturaIpAddressRestriction extends KalturaBaseRestriction {
    ipAddressRestrictionType: KalturaIpAddressRestrictionType;
    ipAddressList: string;
    constructor(data?: KalturaIpAddressRestrictionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
