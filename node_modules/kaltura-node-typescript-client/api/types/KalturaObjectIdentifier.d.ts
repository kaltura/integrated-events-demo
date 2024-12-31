import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaObjectIdentifierArgs extends KalturaObjectBaseArgs {
    extendedFeatures?: string;
}
export declare class KalturaObjectIdentifier extends KalturaObjectBase {
    extendedFeatures: string;
    constructor(data?: KalturaObjectIdentifierArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
