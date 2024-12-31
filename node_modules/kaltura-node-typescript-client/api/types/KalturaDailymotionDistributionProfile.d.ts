import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDailymotionGeoBlockingMapping } from './KalturaDailymotionGeoBlockingMapping';
import { KalturaConfigurableDistributionProfile, KalturaConfigurableDistributionProfileArgs } from './KalturaConfigurableDistributionProfile';
export interface KalturaDailymotionDistributionProfileArgs extends KalturaConfigurableDistributionProfileArgs {
    user?: string;
    password?: string;
    geoBlockingMapping?: KalturaDailymotionGeoBlockingMapping;
}
export declare class KalturaDailymotionDistributionProfile extends KalturaConfigurableDistributionProfile {
    user: string;
    password: string;
    geoBlockingMapping: KalturaDailymotionGeoBlockingMapping;
    constructor(data?: KalturaDailymotionDistributionProfileArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
