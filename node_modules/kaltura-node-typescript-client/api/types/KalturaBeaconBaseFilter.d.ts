import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBeaconObjectTypes } from './KalturaBeaconObjectTypes';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';
export interface KalturaBeaconBaseFilterArgs extends KalturaFilterArgs {
    updatedAtGreaterThanOrEqual?: Date;
    updatedAtLessThanOrEqual?: Date;
    relatedObjectTypeIn?: string;
    relatedObjectTypeEqual?: KalturaBeaconObjectTypes;
    eventTypeIn?: string;
    objectIdIn?: string;
}
export declare class KalturaBeaconBaseFilter extends KalturaFilter {
    updatedAtGreaterThanOrEqual: Date;
    updatedAtLessThanOrEqual: Date;
    relatedObjectTypeIn: string;
    relatedObjectTypeEqual: KalturaBeaconObjectTypes;
    eventTypeIn: string;
    objectIdIn: string;
    constructor(data?: KalturaBeaconBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
