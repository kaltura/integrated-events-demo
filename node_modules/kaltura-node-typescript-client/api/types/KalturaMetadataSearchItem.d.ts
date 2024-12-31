import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSearchOperator, KalturaSearchOperatorArgs } from './KalturaSearchOperator';
export interface KalturaMetadataSearchItemArgs extends KalturaSearchOperatorArgs {
    metadataProfileId?: number;
    orderBy?: string;
}
export declare class KalturaMetadataSearchItem extends KalturaSearchOperator {
    metadataProfileId: number;
    orderBy: string;
    constructor(data?: KalturaMetadataSearchItemArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
