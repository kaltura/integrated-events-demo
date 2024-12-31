import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBeaconIndexType } from './KalturaBeaconIndexType';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';
export interface KalturaBeaconEnhanceFilterArgs extends KalturaFilterArgs {
    externalElasticQueryObject?: string;
    indexTypeEqual?: KalturaBeaconIndexType;
}
export declare class KalturaBeaconEnhanceFilter extends KalturaFilter {
    externalElasticQueryObject: string;
    indexTypeEqual: KalturaBeaconIndexType;
    constructor(data?: KalturaBeaconEnhanceFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
