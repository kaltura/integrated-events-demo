import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSiteRestrictionType } from './KalturaSiteRestrictionType';
import { KalturaBaseRestriction, KalturaBaseRestrictionArgs } from './KalturaBaseRestriction';
export interface KalturaSiteRestrictionArgs extends KalturaBaseRestrictionArgs {
    siteRestrictionType?: KalturaSiteRestrictionType;
    siteList?: string;
}
export declare class KalturaSiteRestriction extends KalturaBaseRestriction {
    siteRestrictionType: KalturaSiteRestrictionType;
    siteList: string;
    constructor(data?: KalturaSiteRestrictionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
