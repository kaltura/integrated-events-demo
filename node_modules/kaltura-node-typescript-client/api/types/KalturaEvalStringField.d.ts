import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaStringField, KalturaStringFieldArgs } from './KalturaStringField';
export interface KalturaEvalStringFieldArgs extends KalturaStringFieldArgs {
    code?: string;
}
export declare class KalturaEvalStringField extends KalturaStringField {
    code: string;
    constructor(data?: KalturaEvalStringFieldArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
