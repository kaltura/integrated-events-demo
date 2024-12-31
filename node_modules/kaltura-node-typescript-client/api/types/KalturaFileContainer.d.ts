import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaFileContainerArgs extends KalturaObjectBaseArgs {
    filePath?: string;
    encryptionKey?: string;
    fileSize?: number;
}
export declare class KalturaFileContainer extends KalturaObjectBase {
    filePath: string;
    encryptionKey: string;
    fileSize: number;
    constructor(data?: KalturaFileContainerArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
