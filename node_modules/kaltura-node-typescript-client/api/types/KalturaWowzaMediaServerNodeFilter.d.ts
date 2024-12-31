import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaWowzaMediaServerNodeBaseFilter, KalturaWowzaMediaServerNodeBaseFilterArgs } from './KalturaWowzaMediaServerNodeBaseFilter';
export interface KalturaWowzaMediaServerNodeFilterArgs extends KalturaWowzaMediaServerNodeBaseFilterArgs {
}
export declare class KalturaWowzaMediaServerNodeFilter extends KalturaWowzaMediaServerNodeBaseFilter {
    constructor(data?: KalturaWowzaMediaServerNodeFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
