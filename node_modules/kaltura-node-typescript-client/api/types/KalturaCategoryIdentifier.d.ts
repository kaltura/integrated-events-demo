import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCategoryIdentifierField } from './KalturaCategoryIdentifierField';
import { KalturaObjectIdentifier, KalturaObjectIdentifierArgs } from './KalturaObjectIdentifier';
export interface KalturaCategoryIdentifierArgs extends KalturaObjectIdentifierArgs {
    identifier?: KalturaCategoryIdentifierField;
}
export declare class KalturaCategoryIdentifier extends KalturaObjectIdentifier {
    identifier: KalturaCategoryIdentifierField;
    constructor(data?: KalturaCategoryIdentifierArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
