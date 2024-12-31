import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';
export interface KalturaReportBaseFilterArgs extends KalturaFilterArgs {
    idEqual?: number;
    idIn?: string;
    partnerIdEqual?: number;
    partnerIdIn?: string;
    systemNameEqual?: string;
    systemNameIn?: string;
}
export declare class KalturaReportBaseFilter extends KalturaFilter {
    idEqual: number;
    idIn: string;
    partnerIdEqual: number;
    partnerIdIn: string;
    systemNameEqual: string;
    systemNameIn: string;
    constructor(data?: KalturaReportBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
