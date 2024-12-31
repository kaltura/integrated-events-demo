import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaAccessControlMessageArgs extends KalturaObjectBaseArgs {
    message?: string;
    code?: string;
}
export declare class KalturaAccessControlMessage extends KalturaObjectBase {
    message: string;
    code: string;
    constructor(data?: KalturaAccessControlMessageArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
