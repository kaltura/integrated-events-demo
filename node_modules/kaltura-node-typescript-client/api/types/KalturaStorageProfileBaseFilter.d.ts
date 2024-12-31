import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaStorageProfileStatus } from './KalturaStorageProfileStatus';
import { KalturaStorageProfileProtocol } from './KalturaStorageProfileProtocol';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';
export interface KalturaStorageProfileBaseFilterArgs extends KalturaFilterArgs {
    idEqual?: number;
    idIn?: string;
    createdAtGreaterThanOrEqual?: Date;
    createdAtLessThanOrEqual?: Date;
    updatedAtGreaterThanOrEqual?: Date;
    updatedAtLessThanOrEqual?: Date;
    partnerIdEqual?: number;
    partnerIdIn?: string;
    systemNameEqual?: string;
    systemNameIn?: string;
    statusEqual?: KalturaStorageProfileStatus;
    statusIn?: string;
    protocolEqual?: KalturaStorageProfileProtocol;
    protocolIn?: string;
}
export declare class KalturaStorageProfileBaseFilter extends KalturaFilter {
    idEqual: number;
    idIn: string;
    createdAtGreaterThanOrEqual: Date;
    createdAtLessThanOrEqual: Date;
    updatedAtGreaterThanOrEqual: Date;
    updatedAtLessThanOrEqual: Date;
    partnerIdEqual: number;
    partnerIdIn: string;
    systemNameEqual: string;
    systemNameIn: string;
    statusEqual: KalturaStorageProfileStatus;
    statusIn: string;
    protocolEqual: KalturaStorageProfileProtocol;
    protocolIn: string;
    constructor(data?: KalturaStorageProfileBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
