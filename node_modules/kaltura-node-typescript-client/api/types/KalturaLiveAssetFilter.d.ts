import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveAssetBaseFilter, KalturaLiveAssetBaseFilterArgs } from './KalturaLiveAssetBaseFilter';
export interface KalturaLiveAssetFilterArgs extends KalturaLiveAssetBaseFilterArgs {
}
export declare class KalturaLiveAssetFilter extends KalturaLiveAssetBaseFilter {
    constructor(data?: KalturaLiveAssetFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
