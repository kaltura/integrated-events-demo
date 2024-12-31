import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaIntegerField, KalturaIntegerFieldArgs } from './KalturaIntegerField';
export interface KalturaTimeContextFieldArgs extends KalturaIntegerFieldArgs {
    offset?: number;
}
export declare class KalturaTimeContextField extends KalturaIntegerField {
    offset: number;
    constructor(data?: KalturaTimeContextFieldArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
