import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaUrlTokenizerArgs extends KalturaObjectBaseArgs {
    window?: number;
    key?: string;
    limitIpAddress?: boolean;
}
export declare class KalturaUrlTokenizer extends KalturaObjectBase {
    window: number;
    key: string;
    limitIpAddress: boolean;
    constructor(data?: KalturaUrlTokenizerArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
