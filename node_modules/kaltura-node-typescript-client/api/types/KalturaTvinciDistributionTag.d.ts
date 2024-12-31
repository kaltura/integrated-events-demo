import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaTvinciDistributionTagArgs extends KalturaObjectBaseArgs {
    tagname?: string;
    extension?: string;
    protocol?: string;
    format?: string;
    filename?: string;
    ppvmodule?: string;
}
export declare class KalturaTvinciDistributionTag extends KalturaObjectBase {
    tagname: string;
    extension: string;
    protocol: string;
    format: string;
    filename: string;
    ppvmodule: string;
    constructor(data?: KalturaTvinciDistributionTagArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
