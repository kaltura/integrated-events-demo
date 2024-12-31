import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaReportGraphArgs extends KalturaObjectBaseArgs {
    id?: string;
    data?: string;
}
export declare class KalturaReportGraph extends KalturaObjectBase {
    id: string;
    data: string;
    constructor(data?: KalturaReportGraphArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
