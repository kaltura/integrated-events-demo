import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBeaconIndexType } from './KalturaBeaconIndexType';
import { KalturaBeaconBaseFilter, KalturaBeaconBaseFilterArgs } from './KalturaBeaconBaseFilter';
export interface KalturaBeaconFilterArgs extends KalturaBeaconBaseFilterArgs {
    indexTypeEqual?: KalturaBeaconIndexType;
}
export declare class KalturaBeaconFilter extends KalturaBeaconBaseFilter {
    indexTypeEqual: KalturaBeaconIndexType;
    constructor(data?: KalturaBeaconFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
