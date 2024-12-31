import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAnnotationBaseFilter, KalturaAnnotationBaseFilterArgs } from './KalturaAnnotationBaseFilter';
export interface KalturaAnnotationFilterArgs extends KalturaAnnotationBaseFilterArgs {
}
export declare class KalturaAnnotationFilter extends KalturaAnnotationBaseFilter {
    constructor(data?: KalturaAnnotationFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
