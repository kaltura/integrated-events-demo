import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaContentResource, KalturaContentResourceArgs } from './KalturaContentResource';
export interface KalturaEntryResourceArgs extends KalturaContentResourceArgs {
    entryId?: string;
    flavorParamsId?: number;
}
export declare class KalturaEntryResource extends KalturaContentResource {
    entryId: string;
    flavorParamsId: number;
    constructor(data?: KalturaEntryResourceArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
