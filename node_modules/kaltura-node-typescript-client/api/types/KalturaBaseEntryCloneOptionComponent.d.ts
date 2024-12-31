import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBaseEntryCloneOptions } from './KalturaBaseEntryCloneOptions';
import { KalturaCloneComponentSelectorType } from './KalturaCloneComponentSelectorType';
import { KalturaBaseEntryCloneOptionItem, KalturaBaseEntryCloneOptionItemArgs } from './KalturaBaseEntryCloneOptionItem';
export interface KalturaBaseEntryCloneOptionComponentArgs extends KalturaBaseEntryCloneOptionItemArgs {
    itemType?: KalturaBaseEntryCloneOptions;
    rule?: KalturaCloneComponentSelectorType;
}
export declare class KalturaBaseEntryCloneOptionComponent extends KalturaBaseEntryCloneOptionItem {
    itemType: KalturaBaseEntryCloneOptions;
    rule: KalturaCloneComponentSelectorType;
    constructor(data?: KalturaBaseEntryCloneOptionComponentArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
