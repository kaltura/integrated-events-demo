import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaServerNode, KalturaServerNodeArgs } from './KalturaServerNode';
export interface KalturaConferenceServerNodeArgs extends KalturaServerNodeArgs {
    serviceBaseUrl?: string;
}
export declare class KalturaConferenceServerNode extends KalturaServerNode {
    serviceBaseUrl: string;
    constructor(data?: KalturaConferenceServerNodeArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
