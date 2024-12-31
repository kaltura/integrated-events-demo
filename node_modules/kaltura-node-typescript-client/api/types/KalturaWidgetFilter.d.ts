import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaWidgetBaseFilter, KalturaWidgetBaseFilterArgs } from './KalturaWidgetBaseFilter';
export interface KalturaWidgetFilterArgs extends KalturaWidgetBaseFilterArgs {
}
export declare class KalturaWidgetFilter extends KalturaWidgetBaseFilter {
    constructor(data?: KalturaWidgetFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
