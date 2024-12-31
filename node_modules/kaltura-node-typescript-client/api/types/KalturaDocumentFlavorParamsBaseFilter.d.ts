import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFlavorParamsFilter, KalturaFlavorParamsFilterArgs } from './KalturaFlavorParamsFilter';
export interface KalturaDocumentFlavorParamsBaseFilterArgs extends KalturaFlavorParamsFilterArgs {
}
export declare class KalturaDocumentFlavorParamsBaseFilter extends KalturaFlavorParamsFilter {
    constructor(data?: KalturaDocumentFlavorParamsBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
