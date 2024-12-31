import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEntryIdentifierField } from './KalturaEntryIdentifierField';
import { KalturaObjectIdentifier, KalturaObjectIdentifierArgs } from './KalturaObjectIdentifier';
export interface KalturaEntryIdentifierArgs extends KalturaObjectIdentifierArgs {
    identifier?: KalturaEntryIdentifierField;
}
export declare class KalturaEntryIdentifier extends KalturaObjectIdentifier {
    identifier: KalturaEntryIdentifierField;
    constructor(data?: KalturaEntryIdentifierArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
