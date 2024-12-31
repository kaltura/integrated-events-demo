import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaVirusScanProfileBaseFilter, KalturaVirusScanProfileBaseFilterArgs } from './KalturaVirusScanProfileBaseFilter';
export interface KalturaVirusScanProfileFilterArgs extends KalturaVirusScanProfileBaseFilterArgs {
}
export declare class KalturaVirusScanProfileFilter extends KalturaVirusScanProfileBaseFilter {
    constructor(data?: KalturaVirusScanProfileFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
