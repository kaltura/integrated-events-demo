import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRelatedFilter, KalturaRelatedFilterArgs } from './KalturaRelatedFilter';
export interface KalturaAccessControlProfileBaseFilterArgs extends KalturaRelatedFilterArgs {
    idEqual?: number;
    idIn?: string;
    systemNameEqual?: string;
    systemNameIn?: string;
    createdAtGreaterThanOrEqual?: Date;
    createdAtLessThanOrEqual?: Date;
    updatedAtGreaterThanOrEqual?: Date;
    updatedAtLessThanOrEqual?: Date;
}
export declare class KalturaAccessControlProfileBaseFilter extends KalturaRelatedFilter {
    idEqual: number;
    idIn: string;
    systemNameEqual: string;
    systemNameIn: string;
    createdAtGreaterThanOrEqual: Date;
    createdAtLessThanOrEqual: Date;
    updatedAtGreaterThanOrEqual: Date;
    updatedAtLessThanOrEqual: Date;
    constructor(data?: KalturaAccessControlProfileBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
