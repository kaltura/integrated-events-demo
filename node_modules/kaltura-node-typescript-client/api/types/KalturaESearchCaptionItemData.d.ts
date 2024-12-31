import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaESearchItemData, KalturaESearchItemDataArgs } from './KalturaESearchItemData';
export interface KalturaESearchCaptionItemDataArgs extends KalturaESearchItemDataArgs {
    line?: string;
    startsAt?: number;
    endsAt?: number;
    language?: string;
    captionAssetId?: string;
    label?: string;
}
export declare class KalturaESearchCaptionItemData extends KalturaESearchItemData {
    line: string;
    startsAt: number;
    endsAt: number;
    language: string;
    captionAssetId: string;
    label: string;
    constructor(data?: KalturaESearchCaptionItemDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
