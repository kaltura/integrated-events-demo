import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAccessControlBaseFilter, KalturaAccessControlBaseFilterArgs } from './KalturaAccessControlBaseFilter';
export interface KalturaAccessControlFilterArgs extends KalturaAccessControlBaseFilterArgs {
}
export declare class KalturaAccessControlFilter extends KalturaAccessControlBaseFilter {
    constructor(data?: KalturaAccessControlFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
