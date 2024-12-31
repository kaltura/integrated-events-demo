import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAppTokenStatus } from './KalturaAppTokenStatus';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';
export interface KalturaAppTokenBaseFilterArgs extends KalturaFilterArgs {
    idEqual?: string;
    idIn?: string;
    createdAtGreaterThanOrEqual?: Date;
    createdAtLessThanOrEqual?: Date;
    updatedAtGreaterThanOrEqual?: Date;
    updatedAtLessThanOrEqual?: Date;
    statusEqual?: KalturaAppTokenStatus;
    statusIn?: string;
    sessionUserIdEqual?: string;
}
export declare class KalturaAppTokenBaseFilter extends KalturaFilter {
    idEqual: string;
    idIn: string;
    createdAtGreaterThanOrEqual: Date;
    createdAtLessThanOrEqual: Date;
    updatedAtGreaterThanOrEqual: Date;
    updatedAtLessThanOrEqual: Date;
    statusEqual: KalturaAppTokenStatus;
    statusIn: string;
    sessionUserIdEqual: string;
    constructor(data?: KalturaAppTokenBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
