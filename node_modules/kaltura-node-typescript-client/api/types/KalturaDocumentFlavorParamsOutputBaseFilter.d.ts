import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFlavorParamsOutputFilter, KalturaFlavorParamsOutputFilterArgs } from './KalturaFlavorParamsOutputFilter';
export interface KalturaDocumentFlavorParamsOutputBaseFilterArgs extends KalturaFlavorParamsOutputFilterArgs {
}
export declare class KalturaDocumentFlavorParamsOutputBaseFilter extends KalturaFlavorParamsOutputFilter {
    constructor(data?: KalturaDocumentFlavorParamsOutputBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
