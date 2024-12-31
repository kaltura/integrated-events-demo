import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMediaInfoBaseFilter, KalturaMediaInfoBaseFilterArgs } from './KalturaMediaInfoBaseFilter';
export interface KalturaMediaInfoFilterArgs extends KalturaMediaInfoBaseFilterArgs {
}
export declare class KalturaMediaInfoFilter extends KalturaMediaInfoBaseFilter {
    constructor(data?: KalturaMediaInfoFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
