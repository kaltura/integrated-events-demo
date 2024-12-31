import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPager, KalturaPagerArgs } from './KalturaPager';
export interface KalturaFilterPagerArgs extends KalturaPagerArgs {
}
export declare class KalturaFilterPager extends KalturaPager {
    constructor(data?: KalturaFilterPagerArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
