import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionProfileStatus } from './KalturaDistributionProfileStatus';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';
export interface KalturaDistributionProfileBaseFilterArgs extends KalturaFilterArgs {
    idEqual?: number;
    idIn?: string;
    createdAtGreaterThanOrEqual?: Date;
    createdAtLessThanOrEqual?: Date;
    updatedAtGreaterThanOrEqual?: Date;
    updatedAtLessThanOrEqual?: Date;
    statusEqual?: KalturaDistributionProfileStatus;
    statusIn?: string;
}
export declare class KalturaDistributionProfileBaseFilter extends KalturaFilter {
    idEqual: number;
    idIn: string;
    createdAtGreaterThanOrEqual: Date;
    createdAtLessThanOrEqual: Date;
    updatedAtGreaterThanOrEqual: Date;
    updatedAtLessThanOrEqual: Date;
    statusEqual: KalturaDistributionProfileStatus;
    statusIn: string;
    constructor(data?: KalturaDistributionProfileBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
