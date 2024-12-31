import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaActivitiBusinessProcessServerProtocol } from './KalturaActivitiBusinessProcessServerProtocol';
import { KalturaBusinessProcessServer, KalturaBusinessProcessServerArgs } from './KalturaBusinessProcessServer';
export interface KalturaActivitiBusinessProcessServerArgs extends KalturaBusinessProcessServerArgs {
    host?: string;
    port?: number;
    protocol?: KalturaActivitiBusinessProcessServerProtocol;
    username?: string;
    password?: string;
}
export declare class KalturaActivitiBusinessProcessServer extends KalturaBusinessProcessServer {
    host: string;
    port: number;
    protocol: KalturaActivitiBusinessProcessServerProtocol;
    username: string;
    password: string;
    constructor(data?: KalturaActivitiBusinessProcessServerArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
