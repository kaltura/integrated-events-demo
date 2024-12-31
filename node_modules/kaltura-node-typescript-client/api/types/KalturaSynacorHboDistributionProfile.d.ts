import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaConfigurableDistributionProfile, KalturaConfigurableDistributionProfileArgs } from './KalturaConfigurableDistributionProfile';
export interface KalturaSynacorHboDistributionProfileArgs extends KalturaConfigurableDistributionProfileArgs {
    feedTitle?: string;
    feedSubtitle?: string;
    feedLink?: string;
    feedAuthorName?: string;
}
export declare class KalturaSynacorHboDistributionProfile extends KalturaConfigurableDistributionProfile {
    readonly feedUrl: string;
    feedTitle: string;
    feedSubtitle: string;
    feedLink: string;
    feedAuthorName: string;
    constructor(data?: KalturaSynacorHboDistributionProfileArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
