import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUiConfBaseFilter, KalturaUiConfBaseFilterArgs } from './KalturaUiConfBaseFilter';
export interface KalturaUiConfFilterArgs extends KalturaUiConfBaseFilterArgs {
}
export declare class KalturaUiConfFilter extends KalturaUiConfBaseFilter {
    constructor(data?: KalturaUiConfFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
