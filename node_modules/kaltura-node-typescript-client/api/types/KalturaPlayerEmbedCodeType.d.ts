import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaPlayerEmbedCodeTypeArgs extends KalturaObjectBaseArgs {
    id?: string;
    label?: string;
    entryOnly?: boolean;
    minVersion?: string;
}
export declare class KalturaPlayerEmbedCodeType extends KalturaObjectBase {
    id: string;
    label: string;
    entryOnly: boolean;
    minVersion: string;
    constructor(data?: KalturaPlayerEmbedCodeTypeArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
