import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaLiveReportExportParamsArgs extends KalturaObjectBaseArgs {
    entryIds?: string;
    recpientEmail?: string;
    timeZoneOffset?: number;
    applicationUrlTemplate?: string;
}
export declare class KalturaLiveReportExportParams extends KalturaObjectBase {
    entryIds: string;
    recpientEmail: string;
    timeZoneOffset: number;
    applicationUrlTemplate: string;
    constructor(data?: KalturaLiveReportExportParamsArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
