import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaIntegrationJobProviderData, KalturaIntegrationJobProviderDataArgs } from './KalturaIntegrationJobProviderData';
export interface KalturaExampleIntegrationJobProviderDataArgs extends KalturaIntegrationJobProviderDataArgs {
    exampleUrl?: string;
}
export declare class KalturaExampleIntegrationJobProviderData extends KalturaIntegrationJobProviderData {
    exampleUrl: string;
    constructor(data?: KalturaExampleIntegrationJobProviderDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
