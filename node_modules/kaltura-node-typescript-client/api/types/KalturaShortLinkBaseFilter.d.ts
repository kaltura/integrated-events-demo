import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaShortLinkStatus } from './KalturaShortLinkStatus';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';
export interface KalturaShortLinkBaseFilterArgs extends KalturaFilterArgs {
    idEqual?: string;
    idIn?: string;
    createdAtGreaterThanOrEqual?: Date;
    createdAtLessThanOrEqual?: Date;
    updatedAtGreaterThanOrEqual?: Date;
    updatedAtLessThanOrEqual?: Date;
    expiresAtGreaterThanOrEqual?: number;
    expiresAtLessThanOrEqual?: number;
    partnerIdEqual?: number;
    partnerIdIn?: string;
    userIdEqual?: string;
    userIdIn?: string;
    systemNameEqual?: string;
    systemNameIn?: string;
    statusEqual?: KalturaShortLinkStatus;
    statusIn?: string;
}
export declare class KalturaShortLinkBaseFilter extends KalturaFilter {
    idEqual: string;
    idIn: string;
    createdAtGreaterThanOrEqual: Date;
    createdAtLessThanOrEqual: Date;
    updatedAtGreaterThanOrEqual: Date;
    updatedAtLessThanOrEqual: Date;
    expiresAtGreaterThanOrEqual: number;
    expiresAtLessThanOrEqual: number;
    partnerIdEqual: number;
    partnerIdIn: string;
    userIdEqual: string;
    userIdIn: string;
    systemNameEqual: string;
    systemNameIn: string;
    statusEqual: KalturaShortLinkStatus;
    statusIn: string;
    constructor(data?: KalturaShortLinkBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
