import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDeliveryServerNodeFilter, KalturaDeliveryServerNodeFilterArgs } from './KalturaDeliveryServerNodeFilter';
export interface KalturaEdgeServerNodeBaseFilterArgs extends KalturaDeliveryServerNodeFilterArgs {
    playbackDomainLike?: string;
    playbackDomainMultiLikeOr?: string;
    playbackDomainMultiLikeAnd?: string;
}
export declare class KalturaEdgeServerNodeBaseFilter extends KalturaDeliveryServerNodeFilter {
    playbackDomainLike: string;
    playbackDomainMultiLikeOr: string;
    playbackDomainMultiLikeAnd: string;
    constructor(data?: KalturaEdgeServerNodeBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
