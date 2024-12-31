import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaContext, KalturaContextArgs } from './KalturaContext';
export interface KalturaEntryContextArgs extends KalturaContextArgs {
    entryId?: string;
    followEntryRedirect?: KalturaNullableBoolean;
}
export declare class KalturaEntryContext extends KalturaContext {
    entryId: string;
    followEntryRedirect: KalturaNullableBoolean;
    constructor(data?: KalturaEntryContextArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
