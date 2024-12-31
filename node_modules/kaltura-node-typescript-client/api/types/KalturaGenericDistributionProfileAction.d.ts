import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionProtocol } from './KalturaDistributionProtocol';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaGenericDistributionProfileActionArgs extends KalturaObjectBaseArgs {
    protocol?: KalturaDistributionProtocol;
    serverUrl?: string;
    serverPath?: string;
    username?: string;
    password?: string;
    ftpPassiveMode?: boolean;
    httpFieldName?: string;
    httpFileName?: string;
}
export declare class KalturaGenericDistributionProfileAction extends KalturaObjectBase {
    protocol: KalturaDistributionProtocol;
    serverUrl: string;
    serverPath: string;
    username: string;
    password: string;
    ftpPassiveMode: boolean;
    httpFieldName: string;
    httpFileName: string;
    constructor(data?: KalturaGenericDistributionProfileActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
