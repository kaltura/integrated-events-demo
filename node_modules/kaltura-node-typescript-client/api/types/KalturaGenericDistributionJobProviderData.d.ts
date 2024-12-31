import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaGenericDistributionProviderParser } from './KalturaGenericDistributionProviderParser';
import { KalturaDistributionJobProviderData, KalturaDistributionJobProviderDataArgs } from './KalturaDistributionJobProviderData';
export interface KalturaGenericDistributionJobProviderDataArgs extends KalturaDistributionJobProviderDataArgs {
    xml?: string;
    resultParseData?: string;
    resultParserType?: KalturaGenericDistributionProviderParser;
}
export declare class KalturaGenericDistributionJobProviderData extends KalturaDistributionJobProviderData {
    xml: string;
    resultParseData: string;
    resultParserType: KalturaGenericDistributionProviderParser;
    constructor(data?: KalturaGenericDistributionJobProviderDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
