import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDurationType } from './KalturaDurationType';
import { KalturaBaseEntry, KalturaBaseEntryArgs } from './KalturaBaseEntry';
export interface KalturaPlayableEntryArgs extends KalturaBaseEntryArgs {
    msDuration?: number;
}
export declare class KalturaPlayableEntry extends KalturaBaseEntry {
    readonly plays: number;
    readonly views: number;
    readonly lastPlayedAt: Date;
    readonly width: number;
    readonly height: number;
    readonly duration: number;
    msDuration: number;
    readonly durationType: KalturaDurationType;
    constructor(data?: KalturaPlayableEntryArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
