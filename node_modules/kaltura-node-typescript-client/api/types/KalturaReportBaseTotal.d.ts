import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaReportBaseTotalArgs extends KalturaObjectBaseArgs {
    id?: string;
    data?: string;
}
export declare class KalturaReportBaseTotal extends KalturaObjectBase {
    id: string;
    data: string;
    constructor(data?: KalturaReportBaseTotalArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
