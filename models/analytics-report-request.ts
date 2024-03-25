/*
Core API

Front is a customer operations platform that enables support, sales, and account management teams to deliver exceptional service at scale. Front streamlines customer communication by combining the efficiency of a help desk and the familiarity of email, with automated workflows and real-time collaboration behind the scenes.

With Front, teams can centralize messages across channels, route them to the right person, and unlock visibility and insights across all of their customer operations. More than 8000 businesses use Front to drive operational efficiency that prevents churn, improves retention, and propels customer growth.

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AnalyticsFilters } from './analytics-filters';
import { AnalyticsMetricId } from './analytics-metric-id';

/**
 * 
 * @export
 * @interface AnalyticsReportRequest
 */
export interface AnalyticsReportRequest {
    /**
     * Start time of the data to include in the export (seconds since 1970-01-01T00:00:00+00). Will be rounded down to the start of the day.
     * @type {number}
     * @memberof AnalyticsReportRequest
     */
    'start': number;
    /**
     * End time of the data to include in the export (seconds since 1970-01-01T00:00:00+00). Will be rounded up to the end of the day.
     * @type {number}
     * @memberof AnalyticsReportRequest
     */
    'end': number;
    /**
     * [IANA name](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) of the timezone to format the dates with. If omitted, the export will use Etc/UTC.
     * @type {string}
     * @memberof AnalyticsReportRequest
     */
    'timezone'?: string;
    /**
     * 
     * @type {AnalyticsFilters}
     * @memberof AnalyticsReportRequest
     */
    'filters'?: AnalyticsFilters;
    /**
     * List of the metrics required.
     * @type {Array<AnalyticsMetricId>}
     * @memberof AnalyticsReportRequest
     */
    'metrics': Array<AnalyticsMetricId>;
}

