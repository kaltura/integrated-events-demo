import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBaseResponseProfile, KalturaBaseResponseProfileArgs } from './KalturaBaseResponseProfile';
export interface KalturaResponseProfileHolderArgs extends KalturaBaseResponseProfileArgs {
    id?: number;
    systemName?: string;
}
export declare class KalturaResponseProfileHolder extends KalturaBaseResponseProfile {
    id: number;
    systemName: string;
    constructor(data?: KalturaResponseProfileHolderArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
