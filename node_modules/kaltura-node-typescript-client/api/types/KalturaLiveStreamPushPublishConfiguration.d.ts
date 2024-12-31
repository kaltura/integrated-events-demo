import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaLiveStreamPushPublishConfigurationArgs extends KalturaObjectBaseArgs {
    publishUrl?: string;
    backupPublishUrl?: string;
    port?: string;
}
export declare class KalturaLiveStreamPushPublishConfiguration extends KalturaObjectBase {
    publishUrl: string;
    backupPublishUrl: string;
    port: string;
    constructor(data?: KalturaLiveStreamPushPublishConfigurationArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
