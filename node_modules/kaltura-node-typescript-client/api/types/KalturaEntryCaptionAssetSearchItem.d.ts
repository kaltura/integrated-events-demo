import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSearchItem, KalturaSearchItemArgs } from './KalturaSearchItem';
export interface KalturaEntryCaptionAssetSearchItemArgs extends KalturaSearchItemArgs {
    contentLike?: string;
    contentMultiLikeOr?: string;
    contentMultiLikeAnd?: string;
}
export declare class KalturaEntryCaptionAssetSearchItem extends KalturaSearchItem {
    contentLike: string;
    contentMultiLikeOr: string;
    contentMultiLikeAnd: string;
    constructor(data?: KalturaEntryCaptionAssetSearchItemArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
