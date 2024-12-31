import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionAction } from './KalturaDistributionAction';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';
export interface KalturaGenericDistributionProviderActionBaseFilterArgs extends KalturaFilterArgs {
    idEqual?: number;
    idIn?: string;
    createdAtGreaterThanOrEqual?: Date;
    createdAtLessThanOrEqual?: Date;
    updatedAtGreaterThanOrEqual?: Date;
    updatedAtLessThanOrEqual?: Date;
    genericDistributionProviderIdEqual?: number;
    genericDistributionProviderIdIn?: string;
    actionEqual?: KalturaDistributionAction;
    actionIn?: string;
}
export declare class KalturaGenericDistributionProviderActionBaseFilter extends KalturaFilter {
    idEqual: number;
    idIn: string;
    createdAtGreaterThanOrEqual: Date;
    createdAtLessThanOrEqual: Date;
    updatedAtGreaterThanOrEqual: Date;
    updatedAtLessThanOrEqual: Date;
    genericDistributionProviderIdEqual: number;
    genericDistributionProviderIdIn: string;
    actionEqual: KalturaDistributionAction;
    actionIn: string;
    constructor(data?: KalturaGenericDistributionProviderActionBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
