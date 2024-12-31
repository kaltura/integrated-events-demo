import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaContentResource, KalturaContentResourceArgs } from './KalturaContentResource';
export interface KalturaStringResourceArgs extends KalturaContentResourceArgs {
    content?: string;
}
export declare class KalturaStringResource extends KalturaContentResource {
    content: string;
    constructor(data?: KalturaStringResourceArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
