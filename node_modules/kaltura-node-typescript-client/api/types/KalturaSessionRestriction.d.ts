import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBaseRestriction, KalturaBaseRestrictionArgs } from './KalturaBaseRestriction';
export interface KalturaSessionRestrictionArgs extends KalturaBaseRestrictionArgs {
}
export declare class KalturaSessionRestriction extends KalturaBaseRestriction {
    constructor(data?: KalturaSessionRestrictionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
