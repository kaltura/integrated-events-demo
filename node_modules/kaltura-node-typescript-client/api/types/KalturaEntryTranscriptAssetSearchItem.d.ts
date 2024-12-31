import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSearchItem, KalturaSearchItemArgs } from './KalturaSearchItem';
export interface KalturaEntryTranscriptAssetSearchItemArgs extends KalturaSearchItemArgs {
    contentLike?: string;
    contentMultiLikeOr?: string;
    contentMultiLikeAnd?: string;
}
export declare class KalturaEntryTranscriptAssetSearchItem extends KalturaSearchItem {
    contentLike: string;
    contentMultiLikeOr: string;
    contentMultiLikeAnd: string;
    constructor(data?: KalturaEntryTranscriptAssetSearchItemArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
