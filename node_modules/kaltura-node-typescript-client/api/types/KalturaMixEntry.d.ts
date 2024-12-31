import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEditorType } from './KalturaEditorType';
import { KalturaPlayableEntry, KalturaPlayableEntryArgs } from './KalturaPlayableEntry';
export interface KalturaMixEntryArgs extends KalturaPlayableEntryArgs {
    editorType?: KalturaEditorType;
    dataContent?: string;
}
export declare class KalturaMixEntry extends KalturaPlayableEntry {
    readonly hasRealThumbnail: boolean;
    editorType: KalturaEditorType;
    dataContent: string;
    constructor(data?: KalturaMixEntryArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
