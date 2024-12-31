import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMetadataObjectType } from './KalturaMetadataObjectType';
import { KalturaMetadataStatus } from './KalturaMetadataStatus';
import { KalturaRelatedFilter, KalturaRelatedFilterArgs } from './KalturaRelatedFilter';
export interface KalturaMetadataBaseFilterArgs extends KalturaRelatedFilterArgs {
    partnerIdEqual?: number;
    metadataProfileIdEqual?: number;
    metadataProfileIdIn?: string;
    metadataProfileVersionEqual?: number;
    metadataProfileVersionGreaterThanOrEqual?: number;
    metadataProfileVersionLessThanOrEqual?: number;
    metadataObjectTypeEqual?: KalturaMetadataObjectType;
    objectIdEqual?: string;
    objectIdIn?: string;
    versionEqual?: number;
    versionGreaterThanOrEqual?: number;
    versionLessThanOrEqual?: number;
    createdAtGreaterThanOrEqual?: Date;
    createdAtLessThanOrEqual?: Date;
    updatedAtGreaterThanOrEqual?: Date;
    updatedAtLessThanOrEqual?: Date;
    statusEqual?: KalturaMetadataStatus;
    statusIn?: string;
}
export declare class KalturaMetadataBaseFilter extends KalturaRelatedFilter {
    partnerIdEqual: number;
    metadataProfileIdEqual: number;
    metadataProfileIdIn: string;
    metadataProfileVersionEqual: number;
    metadataProfileVersionGreaterThanOrEqual: number;
    metadataProfileVersionLessThanOrEqual: number;
    metadataObjectTypeEqual: KalturaMetadataObjectType;
    objectIdEqual: string;
    objectIdIn: string;
    versionEqual: number;
    versionGreaterThanOrEqual: number;
    versionLessThanOrEqual: number;
    createdAtGreaterThanOrEqual: Date;
    createdAtLessThanOrEqual: Date;
    updatedAtGreaterThanOrEqual: Date;
    updatedAtLessThanOrEqual: Date;
    statusEqual: KalturaMetadataStatus;
    statusIn: string;
    constructor(data?: KalturaMetadataBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
