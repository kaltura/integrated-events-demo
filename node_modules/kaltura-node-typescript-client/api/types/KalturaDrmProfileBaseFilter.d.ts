import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDrmProviderType } from './KalturaDrmProviderType';
import { KalturaDrmProfileStatus } from './KalturaDrmProfileStatus';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';
export interface KalturaDrmProfileBaseFilterArgs extends KalturaFilterArgs {
    idEqual?: number;
    idIn?: string;
    partnerIdEqual?: number;
    partnerIdIn?: string;
    nameLike?: string;
    providerEqual?: KalturaDrmProviderType;
    providerIn?: string;
    statusEqual?: KalturaDrmProfileStatus;
    statusIn?: string;
}
export declare class KalturaDrmProfileBaseFilter extends KalturaFilter {
    idEqual: number;
    idIn: string;
    partnerIdEqual: number;
    partnerIdIn: string;
    nameLike: string;
    providerEqual: KalturaDrmProviderType;
    providerIn: string;
    statusEqual: KalturaDrmProfileStatus;
    statusIn: string;
    constructor(data?: KalturaDrmProfileBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
