import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaControlPanelCommandBaseFilter, KalturaControlPanelCommandBaseFilterArgs } from './KalturaControlPanelCommandBaseFilter';
export interface KalturaControlPanelCommandFilterArgs extends KalturaControlPanelCommandBaseFilterArgs {
}
export declare class KalturaControlPanelCommandFilter extends KalturaControlPanelCommandBaseFilter {
    constructor(data?: KalturaControlPanelCommandFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
