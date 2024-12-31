import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaClipDescriptionArgs extends KalturaObjectBaseArgs {
    sourceEntryId?: string;
    startTime?: number;
    duration?: number;
    offsetInDestination?: number;
}
export declare class KalturaClipDescription extends KalturaObjectBase {
    sourceEntryId: string;
    startTime: number;
    duration: number;
    offsetInDestination: number;
    constructor(data?: KalturaClipDescriptionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
