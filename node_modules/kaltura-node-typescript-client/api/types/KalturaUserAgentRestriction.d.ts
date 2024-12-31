import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUserAgentRestrictionType } from './KalturaUserAgentRestrictionType';
import { KalturaBaseRestriction, KalturaBaseRestrictionArgs } from './KalturaBaseRestriction';
export interface KalturaUserAgentRestrictionArgs extends KalturaBaseRestrictionArgs {
    userAgentRestrictionType?: KalturaUserAgentRestrictionType;
    userAgentRegexList?: string;
}
export declare class KalturaUserAgentRestriction extends KalturaBaseRestriction {
    userAgentRestrictionType: KalturaUserAgentRestrictionType;
    userAgentRegexList: string;
    constructor(data?: KalturaUserAgentRestrictionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
