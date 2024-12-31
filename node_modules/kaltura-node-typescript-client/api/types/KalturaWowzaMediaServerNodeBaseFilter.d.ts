import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMediaServerNodeFilter, KalturaMediaServerNodeFilterArgs } from './KalturaMediaServerNodeFilter';
export interface KalturaWowzaMediaServerNodeBaseFilterArgs extends KalturaMediaServerNodeFilterArgs {
}
export declare class KalturaWowzaMediaServerNodeBaseFilter extends KalturaMediaServerNodeFilter {
    constructor(data?: KalturaWowzaMediaServerNodeBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
