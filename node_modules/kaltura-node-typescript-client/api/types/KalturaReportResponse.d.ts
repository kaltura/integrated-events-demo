import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaString } from './KalturaString';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaReportResponseArgs extends KalturaObjectBaseArgs {
    columns?: string;
    results?: KalturaString[];
}
export declare class KalturaReportResponse extends KalturaObjectBase {
    columns: string;
    results: KalturaString[];
    constructor(data?: KalturaReportResponseArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
