import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCountryRestrictionType } from './KalturaCountryRestrictionType';
import { KalturaBaseRestriction, KalturaBaseRestrictionArgs } from './KalturaBaseRestriction';
export interface KalturaCountryRestrictionArgs extends KalturaBaseRestrictionArgs {
    countryRestrictionType?: KalturaCountryRestrictionType;
    countryList?: string;
}
export declare class KalturaCountryRestriction extends KalturaBaseRestriction {
    countryRestrictionType: KalturaCountryRestrictionType;
    countryList: string;
    constructor(data?: KalturaCountryRestrictionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
