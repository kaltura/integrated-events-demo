import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaReport } from './KalturaReport';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';
export interface KalturaReportListResponseArgs extends KalturaListResponseArgs {
}
export declare class KalturaReportListResponse extends KalturaListResponse {
    readonly objects: KalturaReport[];
    constructor(data?: KalturaReportListResponseArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
