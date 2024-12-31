import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaStringField, KalturaStringFieldArgs } from './KalturaStringField';
export interface KalturaUserEmailContextFieldArgs extends KalturaStringFieldArgs {
}
export declare class KalturaUserEmailContextField extends KalturaStringField {
    constructor(data?: KalturaUserEmailContextFieldArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
