import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaReportArgs extends KalturaObjectBaseArgs {
    partnerId?: number;
    name?: string;
    systemName?: string;
    description?: string;
    query?: string;
}
export declare class KalturaReport extends KalturaObjectBase {
    readonly id: number;
    partnerId: number;
    name: string;
    systemName: string;
    description: string;
    query: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    constructor(data?: KalturaReportArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
