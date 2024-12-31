import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaRemotePathArgs extends KalturaObjectBaseArgs {
}
export declare class KalturaRemotePath extends KalturaObjectBase {
    readonly storageProfileId: number;
    readonly uri: string;
    constructor(data?: KalturaRemotePathArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
