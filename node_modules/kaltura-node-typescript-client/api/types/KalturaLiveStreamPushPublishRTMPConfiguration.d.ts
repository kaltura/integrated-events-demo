import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveStreamPushPublishConfiguration, KalturaLiveStreamPushPublishConfigurationArgs } from './KalturaLiveStreamPushPublishConfiguration';
export interface KalturaLiveStreamPushPublishRTMPConfigurationArgs extends KalturaLiveStreamPushPublishConfigurationArgs {
    userId?: string;
    password?: string;
    streamName?: string;
    applicationName?: string;
}
export declare class KalturaLiveStreamPushPublishRTMPConfiguration extends KalturaLiveStreamPushPublishConfiguration {
    userId: string;
    password: string;
    streamName: string;
    applicationName: string;
    constructor(data?: KalturaLiveStreamPushPublishRTMPConfigurationArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
