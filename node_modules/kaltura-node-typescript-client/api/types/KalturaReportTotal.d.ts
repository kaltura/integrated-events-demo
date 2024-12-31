import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaReportTotalArgs extends KalturaObjectBaseArgs {
    header?: string;
    data?: string;
}
export declare class KalturaReportTotal extends KalturaObjectBase {
    header: string;
    data: string;
    constructor(data?: KalturaReportTotalArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
