import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEntryServerNodeBaseFilter, KalturaEntryServerNodeBaseFilterArgs } from './KalturaEntryServerNodeBaseFilter';
export interface KalturaEntryServerNodeFilterArgs extends KalturaEntryServerNodeBaseFilterArgs {
}
export declare class KalturaEntryServerNodeFilter extends KalturaEntryServerNodeBaseFilter {
    constructor(data?: KalturaEntryServerNodeFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
