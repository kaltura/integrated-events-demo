import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaConfigurableDistributionProfile, KalturaConfigurableDistributionProfileArgs } from './KalturaConfigurableDistributionProfile';
export interface KalturaUverseClickToOrderDistributionProfileArgs extends KalturaConfigurableDistributionProfileArgs {
    backgroundImageWide?: string;
    backgroundImageStandard?: string;
}
export declare class KalturaUverseClickToOrderDistributionProfile extends KalturaConfigurableDistributionProfile {
    readonly feedUrl: string;
    backgroundImageWide: string;
    backgroundImageStandard: string;
    constructor(data?: KalturaUverseClickToOrderDistributionProfileArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
