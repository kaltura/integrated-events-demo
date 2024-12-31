import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaReportFilter } from './KalturaReportFilter';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaAnalyticsFilterArgs extends KalturaObjectBaseArgs {
    from_time?: string;
    to_time?: string;
    metrics?: string;
    utcOffset?: number;
    dimensions?: string;
    filters?: KalturaReportFilter[];
    orderBy?: string;
}
export declare class KalturaAnalyticsFilter extends KalturaObjectBase {
    from_time: string;
    to_time: string;
    metrics: string;
    utcOffset: number;
    dimensions: string;
    filters: KalturaReportFilter[];
    orderBy: string;
    constructor(data?: KalturaAnalyticsFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
