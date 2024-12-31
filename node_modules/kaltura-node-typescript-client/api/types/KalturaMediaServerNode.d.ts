import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaKeyValue } from './KalturaKeyValue';
import { KalturaDeliveryServerNode, KalturaDeliveryServerNodeArgs } from './KalturaDeliveryServerNode';
export interface KalturaMediaServerNodeArgs extends KalturaDeliveryServerNodeArgs {
    applicationName?: string;
    mediaServerPortConfig?: KalturaKeyValue[];
    mediaServerPlaybackDomainConfig?: KalturaKeyValue[];
}
export declare class KalturaMediaServerNode extends KalturaDeliveryServerNode {
    applicationName: string;
    mediaServerPortConfig: KalturaKeyValue[];
    mediaServerPlaybackDomainConfig: KalturaKeyValue[];
    constructor(data?: KalturaMediaServerNodeArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
