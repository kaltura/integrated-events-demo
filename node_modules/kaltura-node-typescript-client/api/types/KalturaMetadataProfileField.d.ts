import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaMetadataProfileFieldArgs extends KalturaObjectBaseArgs {
}
export declare class KalturaMetadataProfileField extends KalturaObjectBase {
    readonly id: number;
    readonly xPath: string;
    readonly key: string;
    readonly label: string;
    constructor(data?: KalturaMetadataProfileFieldArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
