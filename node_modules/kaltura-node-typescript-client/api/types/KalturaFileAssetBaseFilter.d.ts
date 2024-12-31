import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFileAssetObjectType } from './KalturaFileAssetObjectType';
import { KalturaFileAssetStatus } from './KalturaFileAssetStatus';
import { KalturaRelatedFilter, KalturaRelatedFilterArgs } from './KalturaRelatedFilter';
export interface KalturaFileAssetBaseFilterArgs extends KalturaRelatedFilterArgs {
    idEqual?: number;
    idIn?: string;
    partnerIdEqual?: number;
    fileAssetObjectTypeEqual?: KalturaFileAssetObjectType;
    objectIdEqual?: string;
    objectIdIn?: string;
    createdAtGreaterThanOrEqual?: number;
    createdAtLessThanOrEqual?: number;
    updatedAtGreaterThanOrEqual?: number;
    updatedAtLessThanOrEqual?: number;
    statusEqual?: KalturaFileAssetStatus;
    statusIn?: string;
}
export declare class KalturaFileAssetBaseFilter extends KalturaRelatedFilter {
    idEqual: number;
    idIn: string;
    partnerIdEqual: number;
    fileAssetObjectTypeEqual: KalturaFileAssetObjectType;
    objectIdEqual: string;
    objectIdIn: string;
    createdAtGreaterThanOrEqual: number;
    createdAtLessThanOrEqual: number;
    updatedAtGreaterThanOrEqual: number;
    updatedAtLessThanOrEqual: number;
    statusEqual: KalturaFileAssetStatus;
    statusIn: string;
    constructor(data?: KalturaFileAssetBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
