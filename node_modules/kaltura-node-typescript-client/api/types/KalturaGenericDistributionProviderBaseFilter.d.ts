import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaGenericDistributionProviderStatus } from './KalturaGenericDistributionProviderStatus';
import { KalturaDistributionProviderFilter, KalturaDistributionProviderFilterArgs } from './KalturaDistributionProviderFilter';
export interface KalturaGenericDistributionProviderBaseFilterArgs extends KalturaDistributionProviderFilterArgs {
    idEqual?: number;
    idIn?: string;
    createdAtGreaterThanOrEqual?: Date;
    createdAtLessThanOrEqual?: Date;
    updatedAtGreaterThanOrEqual?: Date;
    updatedAtLessThanOrEqual?: Date;
    partnerIdEqual?: number;
    partnerIdIn?: string;
    isDefaultEqual?: KalturaNullableBoolean;
    isDefaultIn?: string;
    statusEqual?: KalturaGenericDistributionProviderStatus;
    statusIn?: string;
}
export declare class KalturaGenericDistributionProviderBaseFilter extends KalturaDistributionProviderFilter {
    idEqual: number;
    idIn: string;
    createdAtGreaterThanOrEqual: Date;
    createdAtLessThanOrEqual: Date;
    updatedAtGreaterThanOrEqual: Date;
    updatedAtLessThanOrEqual: Date;
    partnerIdEqual: number;
    partnerIdIn: string;
    isDefaultEqual: KalturaNullableBoolean;
    isDefaultIn: string;
    statusEqual: KalturaGenericDistributionProviderStatus;
    statusIn: string;
    constructor(data?: KalturaGenericDistributionProviderBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
