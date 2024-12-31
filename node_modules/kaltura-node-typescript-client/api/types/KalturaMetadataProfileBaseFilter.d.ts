import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMetadataObjectType } from './KalturaMetadataObjectType';
import { KalturaMetadataProfileStatus } from './KalturaMetadataProfileStatus';
import { KalturaMetadataProfileCreateMode } from './KalturaMetadataProfileCreateMode';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';
export interface KalturaMetadataProfileBaseFilterArgs extends KalturaFilterArgs {
    idEqual?: number;
    partnerIdEqual?: number;
    metadataObjectTypeEqual?: KalturaMetadataObjectType;
    metadataObjectTypeIn?: string;
    versionEqual?: number;
    nameEqual?: string;
    systemNameEqual?: string;
    systemNameIn?: string;
    createdAtGreaterThanOrEqual?: Date;
    createdAtLessThanOrEqual?: Date;
    updatedAtGreaterThanOrEqual?: Date;
    updatedAtLessThanOrEqual?: Date;
    statusEqual?: KalturaMetadataProfileStatus;
    statusIn?: string;
    createModeEqual?: KalturaMetadataProfileCreateMode;
    createModeNotEqual?: KalturaMetadataProfileCreateMode;
    createModeIn?: string;
    createModeNotIn?: string;
}
export declare class KalturaMetadataProfileBaseFilter extends KalturaFilter {
    idEqual: number;
    partnerIdEqual: number;
    metadataObjectTypeEqual: KalturaMetadataObjectType;
    metadataObjectTypeIn: string;
    versionEqual: number;
    nameEqual: string;
    systemNameEqual: string;
    systemNameIn: string;
    createdAtGreaterThanOrEqual: Date;
    createdAtLessThanOrEqual: Date;
    updatedAtGreaterThanOrEqual: Date;
    updatedAtLessThanOrEqual: Date;
    statusEqual: KalturaMetadataProfileStatus;
    statusIn: string;
    createModeEqual: KalturaMetadataProfileCreateMode;
    createModeNotEqual: KalturaMetadataProfileCreateMode;
    createModeIn: string;
    createModeNotIn: string;
    constructor(data?: KalturaMetadataProfileBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
