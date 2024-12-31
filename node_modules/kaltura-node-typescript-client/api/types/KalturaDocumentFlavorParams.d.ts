import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFlavorParams, KalturaFlavorParamsArgs } from './KalturaFlavorParams';
export interface KalturaDocumentFlavorParamsArgs extends KalturaFlavorParamsArgs {
}
export declare class KalturaDocumentFlavorParams extends KalturaFlavorParams {
    constructor(data?: KalturaDocumentFlavorParamsArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
