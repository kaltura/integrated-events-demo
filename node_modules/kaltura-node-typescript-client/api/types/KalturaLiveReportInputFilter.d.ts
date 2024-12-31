import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaLiveReportOrderBy } from './KalturaLiveReportOrderBy';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaLiveReportInputFilterArgs extends KalturaObjectBaseArgs {
    entryIds?: string;
    fromTime?: Date;
    toTime?: Date;
    live?: KalturaNullableBoolean;
    orderBy?: KalturaLiveReportOrderBy;
}
export declare class KalturaLiveReportInputFilter extends KalturaObjectBase {
    entryIds: string;
    fromTime: Date;
    toTime: Date;
    live: KalturaNullableBoolean;
    orderBy: KalturaLiveReportOrderBy;
    constructor(data?: KalturaLiveReportInputFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
