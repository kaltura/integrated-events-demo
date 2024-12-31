import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMediaServerNode, KalturaMediaServerNodeArgs } from './KalturaMediaServerNode';
export interface KalturaWowzaMediaServerNodeArgs extends KalturaMediaServerNodeArgs {
    appPrefix?: string;
    transcoder?: string;
    GPUID?: number;
    liveServicePort?: number;
    liveServiceProtocol?: string;
    liveServiceInternalDomain?: string;
}
export declare class KalturaWowzaMediaServerNode extends KalturaMediaServerNode {
    appPrefix: string;
    transcoder: string;
    GPUID: number;
    liveServicePort: number;
    liveServiceProtocol: string;
    liveServiceInternalDomain: string;
    constructor(data?: KalturaWowzaMediaServerNodeArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
