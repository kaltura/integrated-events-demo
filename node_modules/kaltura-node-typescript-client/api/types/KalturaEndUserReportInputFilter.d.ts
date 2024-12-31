import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaReportInputFilter, KalturaReportInputFilterArgs } from './KalturaReportInputFilter';
export interface KalturaEndUserReportInputFilterArgs extends KalturaReportInputFilterArgs {
    application?: string;
    userIds?: string;
    playbackContext?: string;
    ancestorPlaybackContext?: string;
}
export declare class KalturaEndUserReportInputFilter extends KalturaReportInputFilter {
    application: string;
    userIds: string;
    playbackContext: string;
    ancestorPlaybackContext: string;
    constructor(data?: KalturaEndUserReportInputFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
