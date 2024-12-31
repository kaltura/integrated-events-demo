import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaString } from './KalturaString';
import { KalturaESearchItemData, KalturaESearchItemDataArgs } from './KalturaESearchItemData';
export interface KalturaESearchCuePointItemDataArgs extends KalturaESearchItemDataArgs {
    cuePointType?: string;
    id?: string;
    name?: string;
    text?: string;
    tags?: KalturaString[];
    startTime?: string;
    endTime?: string;
    subType?: string;
    question?: string;
    answers?: KalturaString[];
    hint?: string;
    explanation?: string;
    assetId?: string;
}
export declare class KalturaESearchCuePointItemData extends KalturaESearchItemData {
    cuePointType: string;
    id: string;
    name: string;
    text: string;
    tags: KalturaString[];
    startTime: string;
    endTime: string;
    subType: string;
    question: string;
    answers: KalturaString[];
    hint: string;
    explanation: string;
    assetId: string;
    constructor(data?: KalturaESearchCuePointItemDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
