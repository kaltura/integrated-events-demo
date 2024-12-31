import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaKeyValue } from './KalturaKeyValue';
import { KalturaConfigurableDistributionProfile, KalturaConfigurableDistributionProfileArgs } from './KalturaConfigurableDistributionProfile';
export interface KalturaComcastMrssDistributionProfileArgs extends KalturaConfigurableDistributionProfileArgs {
    metadataProfileId?: number;
    feedTitle?: string;
    feedLink?: string;
    feedDescription?: string;
    feedLastBuildDate?: string;
    itemLink?: string;
    cPlatformTvSeries?: KalturaKeyValue[];
    cPlatformTvSeriesField?: string;
    shouldIncludeCuePoints?: boolean;
    shouldIncludeCaptions?: boolean;
    shouldAddThumbExtension?: boolean;
}
export declare class KalturaComcastMrssDistributionProfile extends KalturaConfigurableDistributionProfile {
    metadataProfileId: number;
    readonly feedUrl: string;
    feedTitle: string;
    feedLink: string;
    feedDescription: string;
    feedLastBuildDate: string;
    itemLink: string;
    cPlatformTvSeries: KalturaKeyValue[];
    cPlatformTvSeriesField: string;
    shouldIncludeCuePoints: boolean;
    shouldIncludeCaptions: boolean;
    shouldAddThumbExtension: boolean;
    constructor(data?: KalturaComcastMrssDistributionProfileArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
