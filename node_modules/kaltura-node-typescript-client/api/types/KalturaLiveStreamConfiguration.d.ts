import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPlaybackProtocol } from './KalturaPlaybackProtocol';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaLiveStreamConfigurationArgs extends KalturaObjectBaseArgs {
    protocol?: KalturaPlaybackProtocol;
    url?: string;
    publishUrl?: string;
    backupUrl?: string;
    streamName?: string;
}
export declare class KalturaLiveStreamConfiguration extends KalturaObjectBase {
    protocol: KalturaPlaybackProtocol;
    url: string;
    publishUrl: string;
    backupUrl: string;
    streamName: string;
    constructor(data?: KalturaLiveStreamConfigurationArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
