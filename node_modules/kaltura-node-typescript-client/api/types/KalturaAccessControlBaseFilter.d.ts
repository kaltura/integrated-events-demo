import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRelatedFilter, KalturaRelatedFilterArgs } from './KalturaRelatedFilter';
export interface KalturaAccessControlBaseFilterArgs extends KalturaRelatedFilterArgs {
    idEqual?: number;
    idIn?: string;
    systemNameEqual?: string;
    systemNameIn?: string;
    createdAtGreaterThanOrEqual?: Date;
    createdAtLessThanOrEqual?: Date;
}
export declare class KalturaAccessControlBaseFilter extends KalturaRelatedFilter {
    idEqual: number;
    idIn: string;
    systemNameEqual: string;
    systemNameIn: string;
    createdAtGreaterThanOrEqual: Date;
    createdAtLessThanOrEqual: Date;
    constructor(data?: KalturaAccessControlBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
