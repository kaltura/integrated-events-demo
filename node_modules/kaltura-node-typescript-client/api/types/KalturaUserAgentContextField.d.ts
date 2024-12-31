import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaStringField, KalturaStringFieldArgs } from './KalturaStringField';
export interface KalturaUserAgentContextFieldArgs extends KalturaStringFieldArgs {
}
export declare class KalturaUserAgentContextField extends KalturaStringField {
    constructor(data?: KalturaUserAgentContextFieldArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
