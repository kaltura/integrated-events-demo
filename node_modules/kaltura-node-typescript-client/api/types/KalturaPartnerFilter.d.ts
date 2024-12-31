import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPartnerBaseFilter, KalturaPartnerBaseFilterArgs } from './KalturaPartnerBaseFilter';
export interface KalturaPartnerFilterArgs extends KalturaPartnerBaseFilterArgs {
}
export declare class KalturaPartnerFilter extends KalturaPartnerBaseFilter {
    constructor(data?: KalturaPartnerFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
