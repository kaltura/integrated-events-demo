import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBusinessProcessServerStatus } from './KalturaBusinessProcessServerStatus';
import { KalturaBusinessProcessProvider } from './KalturaBusinessProcessProvider';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaBusinessProcessServerArgs extends KalturaObjectBaseArgs {
    name?: string;
    systemName?: string;
    description?: string;
    dc?: number;
}
export declare class KalturaBusinessProcessServer extends KalturaObjectBase {
    readonly id: number;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    readonly partnerId: number;
    name: string;
    systemName: string;
    description: string;
    readonly status: KalturaBusinessProcessServerStatus;
    readonly type: KalturaBusinessProcessProvider;
    dc: number;
    constructor(data?: KalturaBusinessProcessServerArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
