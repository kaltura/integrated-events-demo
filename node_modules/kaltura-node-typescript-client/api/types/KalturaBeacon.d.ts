import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBeaconObjectTypes } from './KalturaBeaconObjectTypes';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaBeaconArgs extends KalturaObjectBaseArgs {
    relatedObjectType?: KalturaBeaconObjectTypes;
    eventType?: string;
    objectId?: string;
    privateData?: string;
    rawData?: string;
}
export declare class KalturaBeacon extends KalturaObjectBase {
    readonly id: string;
    readonly indexType: string;
    readonly updatedAt: Date;
    relatedObjectType: KalturaBeaconObjectTypes;
    eventType: string;
    objectId: string;
    privateData: string;
    rawData: string;
    constructor(data?: KalturaBeaconArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
