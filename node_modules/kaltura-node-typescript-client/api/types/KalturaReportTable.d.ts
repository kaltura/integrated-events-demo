import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaReportTableArgs extends KalturaObjectBaseArgs {
}
export declare class KalturaReportTable extends KalturaObjectBase {
    readonly header: string;
    readonly data: string;
    readonly totalCount: number;
    constructor(data?: KalturaReportTableArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
