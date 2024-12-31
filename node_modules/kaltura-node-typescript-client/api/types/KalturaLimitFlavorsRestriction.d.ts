import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLimitFlavorsRestrictionType } from './KalturaLimitFlavorsRestrictionType';
import { KalturaBaseRestriction, KalturaBaseRestrictionArgs } from './KalturaBaseRestriction';
export interface KalturaLimitFlavorsRestrictionArgs extends KalturaBaseRestrictionArgs {
    limitFlavorsRestrictionType?: KalturaLimitFlavorsRestrictionType;
    flavorParamsIds?: string;
}
export declare class KalturaLimitFlavorsRestriction extends KalturaBaseRestriction {
    limitFlavorsRestrictionType: KalturaLimitFlavorsRestrictionType;
    flavorParamsIds: string;
    constructor(data?: KalturaLimitFlavorsRestrictionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
