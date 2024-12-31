import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaKeyValueArgs extends KalturaObjectBaseArgs {
    key?: string;
    value?: string;
}
export declare class KalturaKeyValue extends KalturaObjectBase {
    key: string;
    value: string;
    constructor(data?: KalturaKeyValueArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
