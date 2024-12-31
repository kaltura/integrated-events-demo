import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaStringField, KalturaStringFieldArgs } from './KalturaStringField';
export interface KalturaObjectIdFieldArgs extends KalturaStringFieldArgs {
}
export declare class KalturaObjectIdField extends KalturaStringField {
    constructor(data?: KalturaObjectIdFieldArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
