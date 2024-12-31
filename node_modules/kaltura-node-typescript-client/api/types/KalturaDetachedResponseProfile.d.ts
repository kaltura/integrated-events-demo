import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaResponseProfileType } from './KalturaResponseProfileType';
import { KalturaRelatedFilter } from './KalturaRelatedFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaResponseProfileMapping } from './KalturaResponseProfileMapping';
import { KalturaBaseResponseProfile, KalturaBaseResponseProfileArgs } from './KalturaBaseResponseProfile';
export interface KalturaDetachedResponseProfileArgs extends KalturaBaseResponseProfileArgs {
    name?: string;
    type?: KalturaResponseProfileType;
    fields?: string;
    filter?: KalturaRelatedFilter;
    pager?: KalturaFilterPager;
    relatedProfiles?: KalturaDetachedResponseProfile[];
    mappings?: KalturaResponseProfileMapping[];
}
export declare class KalturaDetachedResponseProfile extends KalturaBaseResponseProfile {
    name: string;
    type: KalturaResponseProfileType;
    fields: string;
    filter: KalturaRelatedFilter;
    pager: KalturaFilterPager;
    relatedProfiles: KalturaDetachedResponseProfile[];
    mappings: KalturaResponseProfileMapping[];
    constructor(data?: KalturaDetachedResponseProfileArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
