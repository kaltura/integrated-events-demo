import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaCEErrorArgs extends KalturaObjectBaseArgs {
    partnerId?: number;
    browser?: string;
    serverIp?: string;
    serverOs?: string;
    phpVersion?: string;
    ceAdminEmail?: string;
    type?: string;
    description?: string;
    data?: string;
}
export declare class KalturaCEError extends KalturaObjectBase {
    readonly id: string;
    partnerId: number;
    browser: string;
    serverIp: string;
    serverOs: string;
    phpVersion: string;
    ceAdminEmail: string;
    type: string;
    description: string;
    data: string;
    constructor(data?: KalturaCEErrorArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
