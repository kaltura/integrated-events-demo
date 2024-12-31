import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaLiveReportExportResponseArgs extends KalturaObjectBaseArgs {
    referenceJobId?: number;
    reportEmail?: string;
}
export declare class KalturaLiveReportExportResponse extends KalturaObjectBase {
    referenceJobId: number;
    reportEmail: string;
    constructor(data?: KalturaLiveReportExportResponseArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
