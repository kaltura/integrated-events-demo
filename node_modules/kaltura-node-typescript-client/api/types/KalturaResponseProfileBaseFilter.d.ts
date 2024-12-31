import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaResponseProfileStatus } from './KalturaResponseProfileStatus';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';
export interface KalturaResponseProfileBaseFilterArgs extends KalturaFilterArgs {
    idEqual?: number;
    idIn?: string;
    systemNameEqual?: string;
    systemNameIn?: string;
    createdAtGreaterThanOrEqual?: Date;
    createdAtLessThanOrEqual?: Date;
    updatedAtGreaterThanOrEqual?: Date;
    updatedAtLessThanOrEqual?: Date;
    statusEqual?: KalturaResponseProfileStatus;
    statusIn?: string;
}
export declare class KalturaResponseProfileBaseFilter extends KalturaFilter {
    idEqual: number;
    idIn: string;
    systemNameEqual: string;
    systemNameIn: string;
    createdAtGreaterThanOrEqual: Date;
    createdAtLessThanOrEqual: Date;
    updatedAtGreaterThanOrEqual: Date;
    updatedAtLessThanOrEqual: Date;
    statusEqual: KalturaResponseProfileStatus;
    statusIn: string;
    constructor(data?: KalturaResponseProfileBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
