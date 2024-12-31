import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaVirusScanProfileStatus } from './KalturaVirusScanProfileStatus';
import { KalturaVirusScanEngineType } from './KalturaVirusScanEngineType';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';
export interface KalturaVirusScanProfileBaseFilterArgs extends KalturaFilterArgs {
    idEqual?: number;
    idIn?: string;
    createdAtGreaterThanOrEqual?: Date;
    createdAtLessThanOrEqual?: Date;
    updatedAtGreaterThanOrEqual?: Date;
    updatedAtLessThanOrEqual?: Date;
    partnerIdEqual?: number;
    partnerIdIn?: string;
    nameEqual?: string;
    nameLike?: string;
    statusEqual?: KalturaVirusScanProfileStatus;
    statusIn?: string;
    engineTypeEqual?: KalturaVirusScanEngineType;
    engineTypeIn?: string;
}
export declare class KalturaVirusScanProfileBaseFilter extends KalturaFilter {
    idEqual: number;
    idIn: string;
    createdAtGreaterThanOrEqual: Date;
    createdAtLessThanOrEqual: Date;
    updatedAtGreaterThanOrEqual: Date;
    updatedAtLessThanOrEqual: Date;
    partnerIdEqual: number;
    partnerIdIn: string;
    nameEqual: string;
    nameLike: string;
    statusEqual: KalturaVirusScanProfileStatus;
    statusIn: string;
    engineTypeEqual: KalturaVirusScanEngineType;
    engineTypeIn: string;
    constructor(data?: KalturaVirusScanProfileBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
