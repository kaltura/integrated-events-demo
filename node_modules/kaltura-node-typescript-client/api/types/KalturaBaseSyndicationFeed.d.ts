import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSyndicationFeedStatus } from './KalturaSyndicationFeedStatus';
import { KalturaSyndicationFeedType } from './KalturaSyndicationFeedType';
import { KalturaSyndicationFeedEntriesOrderBy } from './KalturaSyndicationFeedEntriesOrderBy';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaBaseSyndicationFeedArgs extends KalturaObjectBaseArgs {
    playlistId?: string;
    name?: string;
    type?: KalturaSyndicationFeedType;
    landingPage?: string;
    allowEmbed?: boolean;
    playerUiconfId?: number;
    flavorParamId?: number;
    transcodeExistingContent?: boolean;
    addToDefaultConversionProfile?: boolean;
    categories?: string;
    storageId?: number;
    entriesOrderBy?: KalturaSyndicationFeedEntriesOrderBy;
    enforceEntitlement?: boolean;
    privacyContext?: string;
    useCategoryEntries?: boolean;
    feedContentTypeHeader?: string;
}
export declare class KalturaBaseSyndicationFeed extends KalturaObjectBase {
    readonly id: string;
    readonly feedUrl: string;
    readonly partnerId: number;
    playlistId: string;
    name: string;
    readonly status: KalturaSyndicationFeedStatus;
    type: KalturaSyndicationFeedType;
    landingPage: string;
    readonly createdAt: Date;
    allowEmbed: boolean;
    playerUiconfId: number;
    flavorParamId: number;
    transcodeExistingContent: boolean;
    addToDefaultConversionProfile: boolean;
    categories: string;
    storageId: number;
    entriesOrderBy: KalturaSyndicationFeedEntriesOrderBy;
    enforceEntitlement: boolean;
    privacyContext: string;
    readonly updatedAt: Date;
    useCategoryEntries: boolean;
    feedContentTypeHeader: string;
    constructor(data?: KalturaBaseSyndicationFeedArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
