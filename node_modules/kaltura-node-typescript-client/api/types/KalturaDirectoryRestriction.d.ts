import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDirectoryRestrictionType } from './KalturaDirectoryRestrictionType';
import { KalturaBaseRestriction, KalturaBaseRestrictionArgs } from './KalturaBaseRestriction';
export interface KalturaDirectoryRestrictionArgs extends KalturaBaseRestrictionArgs {
    directoryRestrictionType?: KalturaDirectoryRestrictionType;
}
export declare class KalturaDirectoryRestriction extends KalturaBaseRestriction {
    directoryRestrictionType: KalturaDirectoryRestrictionType;
    constructor(data?: KalturaDirectoryRestrictionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
