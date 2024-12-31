import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaConfigurableDistributionProfile, KalturaConfigurableDistributionProfileArgs } from './KalturaConfigurableDistributionProfile';
export interface KalturaMsnDistributionProfileArgs extends KalturaConfigurableDistributionProfileArgs {
    username?: string;
    password?: string;
    domain?: string;
    csId?: string;
    source?: string;
    sourceFriendlyName?: string;
    pageGroup?: string;
    sourceFlavorParamsId?: number;
    wmvFlavorParamsId?: number;
    flvFlavorParamsId?: number;
    slFlavorParamsId?: number;
    slHdFlavorParamsId?: number;
    msnvideoCat?: string;
    msnvideoTop?: string;
    msnvideoTopCat?: string;
}
export declare class KalturaMsnDistributionProfile extends KalturaConfigurableDistributionProfile {
    username: string;
    password: string;
    domain: string;
    csId: string;
    source: string;
    sourceFriendlyName: string;
    pageGroup: string;
    sourceFlavorParamsId: number;
    wmvFlavorParamsId: number;
    flvFlavorParamsId: number;
    slFlavorParamsId: number;
    slHdFlavorParamsId: number;
    msnvideoCat: string;
    msnvideoTop: string;
    msnvideoTopCat: string;
    constructor(data?: KalturaMsnDistributionProfileArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
