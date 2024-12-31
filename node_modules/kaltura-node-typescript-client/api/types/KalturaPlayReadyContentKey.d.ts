import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaPlayReadyContentKeyArgs extends KalturaObjectBaseArgs {
    keyId?: string;
    contentKey?: string;
}
export declare class KalturaPlayReadyContentKey extends KalturaObjectBase {
    keyId: string;
    contentKey: string;
    constructor(data?: KalturaPlayReadyContentKeyArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
