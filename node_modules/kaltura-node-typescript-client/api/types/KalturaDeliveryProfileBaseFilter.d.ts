import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPlaybackProtocol } from './KalturaPlaybackProtocol';
import { KalturaDeliveryStatus } from './KalturaDeliveryStatus';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';
export interface KalturaDeliveryProfileBaseFilterArgs extends KalturaFilterArgs {
    idEqual?: number;
    idIn?: string;
    partnerIdEqual?: number;
    partnerIdIn?: string;
    systemNameEqual?: string;
    systemNameIn?: string;
    createdAtGreaterThanOrEqual?: Date;
    createdAtLessThanOrEqual?: Date;
    updatedAtGreaterThanOrEqual?: Date;
    updatedAtLessThanOrEqual?: Date;
    streamerTypeEqual?: KalturaPlaybackProtocol;
    statusEqual?: KalturaDeliveryStatus;
    statusIn?: string;
}
export declare class KalturaDeliveryProfileBaseFilter extends KalturaFilter {
    idEqual: number;
    idIn: string;
    partnerIdEqual: number;
    partnerIdIn: string;
    systemNameEqual: string;
    systemNameIn: string;
    createdAtGreaterThanOrEqual: Date;
    createdAtLessThanOrEqual: Date;
    updatedAtGreaterThanOrEqual: Date;
    updatedAtLessThanOrEqual: Date;
    streamerTypeEqual: KalturaPlaybackProtocol;
    statusEqual: KalturaDeliveryStatus;
    statusIn: string;
    constructor(data?: KalturaDeliveryProfileBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
