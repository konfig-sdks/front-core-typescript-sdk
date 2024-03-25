/* tslint:disable */
/* eslint-disable */
/*
Core API

Front is a customer operations platform that enables support, sales, and account management teams to deliver exceptional service at scale. Front streamlines customer communication by combining the efficiency of a help desk and the familiarity of email, with automated workflows and real-time collaboration behind the scenes.

With Front, teams can centralize messages across channels, route them to the right person, and unlock visibility and insights across all of their customer operations. More than 8000 businesses use Front to drive operational efficiency that prevents churn, improves retention, and propels customer growth.

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { AnalyticsActivitiesColumns } from '../models';
// @ts-ignore
import { AnalyticsExportRequest } from '../models';
// @ts-ignore
import { AnalyticsFilters } from '../models';
// @ts-ignore
import { AnalyticsMetricId } from '../models';
// @ts-ignore
import { AnalyticsReportRequest } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * AnalyticsApi - axios parameter creator
 * @export
 */
export const AnalyticsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create a new analytics export of messages or events (activities) over a specific time span. The export will be executed asynchronously. The response will include a link that can be used to retrieve the export status & result. Refer to the [Analytics](https://dev.frontapp.com/reference/analytics) topic for details about specific metrics. 
         * @summary Create a new analytics export.
         * @param {AnalyticsExportRequest} [analyticsExportRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNewExport: async (analyticsExportRequest?: AnalyticsExportRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/analytics/exports`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication http required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: analyticsExportRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/analytics/exports',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(analyticsExportRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Create a new analytics report for a set of metrics over a specific time span. Different filters (e.g. Inbox v Tag v Teammates) will be joined with AND logic, but the IDs within a filter will be joined with OR logic (e.g. Inbox A or Inbox B, Tag A or Tag B). The report will be executed asynchronously. The response will include a link that can be used to retrieve the report status & result. Refer to the [Analytics](https://dev.frontapp.com/reference/analytics) topic for details about specific metrics. 
         * @summary Create a new analytics report.
         * @param {AnalyticsReportRequest} [analyticsReportRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNewReport: async (analyticsReportRequest?: AnalyticsReportRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/analytics/reports`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication http required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: analyticsReportRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/analytics/reports',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(analyticsReportRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Fetch an analytics exports. Refer to the [Analytics](https://dev.frontapp.com/reference/analytics) topic for details about specific metrics.
         * @summary Fetch an analytics export.
         * @param {string} exportId The export ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getExport: async (exportId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'exportId' is not null or undefined
            assertParamExists('getExport', 'exportId', exportId)
            const localVarPath = `/analytics/exports/{export_id}`
                .replace(`{${"export_id"}}`, encodeURIComponent(String(exportId !== undefined ? exportId : `-export_id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication http required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/analytics/exports/{export_id}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Fetch an analytics report. Refer to the [Analytics](https://dev.frontapp.com/reference/analytics) topic for details about specific metrics.
         * @summary Fetch an analytics report.
         * @param {string} reportUid The report UID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getReport: async (reportUid: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'reportUid' is not null or undefined
            assertParamExists('getReport', 'reportUid', reportUid)
            const localVarPath = `/analytics/reports/{report_uid}`
                .replace(`{${"report_uid"}}`, encodeURIComponent(String(reportUid !== undefined ? reportUid : `-report_uid-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication http required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/analytics/reports/{report_uid}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AnalyticsApi - functional programming interface
 * @export
 */
export const AnalyticsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AnalyticsApiAxiosParamCreator(configuration)
    return {
        /**
         * Create a new analytics export of messages or events (activities) over a specific time span. The export will be executed asynchronously. The response will include a link that can be used to retrieve the export status & result. Refer to the [Analytics](https://dev.frontapp.com/reference/analytics) topic for details about specific metrics. 
         * @summary Create a new analytics export.
         * @param {AnalyticsApiCreateNewExportRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createNewExport(requestParameters: AnalyticsApiCreateNewExportRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const analyticsExportRequest: AnalyticsExportRequest = {
                type: requestParameters.type,
                start: requestParameters.start,
                end: requestParameters.end,
                timezone: requestParameters.timezone,
                filters: requestParameters.filters
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.createNewExport(analyticsExportRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Create a new analytics report for a set of metrics over a specific time span. Different filters (e.g. Inbox v Tag v Teammates) will be joined with AND logic, but the IDs within a filter will be joined with OR logic (e.g. Inbox A or Inbox B, Tag A or Tag B). The report will be executed asynchronously. The response will include a link that can be used to retrieve the report status & result. Refer to the [Analytics](https://dev.frontapp.com/reference/analytics) topic for details about specific metrics. 
         * @summary Create a new analytics report.
         * @param {AnalyticsApiCreateNewReportRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createNewReport(requestParameters: AnalyticsApiCreateNewReportRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const analyticsReportRequest: AnalyticsReportRequest = {
                start: requestParameters.start,
                end: requestParameters.end,
                timezone: requestParameters.timezone,
                filters: requestParameters.filters,
                metrics: requestParameters.metrics
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.createNewReport(analyticsReportRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Fetch an analytics exports. Refer to the [Analytics](https://dev.frontapp.com/reference/analytics) topic for details about specific metrics.
         * @summary Fetch an analytics export.
         * @param {AnalyticsApiGetExportRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getExport(requestParameters: AnalyticsApiGetExportRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getExport(requestParameters.exportId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Fetch an analytics report. Refer to the [Analytics](https://dev.frontapp.com/reference/analytics) topic for details about specific metrics.
         * @summary Fetch an analytics report.
         * @param {AnalyticsApiGetReportRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getReport(requestParameters: AnalyticsApiGetReportRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getReport(requestParameters.reportUid, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * AnalyticsApi - factory interface
 * @export
 */
export const AnalyticsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AnalyticsApiFp(configuration)
    return {
        /**
         * Create a new analytics export of messages or events (activities) over a specific time span. The export will be executed asynchronously. The response will include a link that can be used to retrieve the export status & result. Refer to the [Analytics](https://dev.frontapp.com/reference/analytics) topic for details about specific metrics. 
         * @summary Create a new analytics export.
         * @param {AnalyticsApiCreateNewExportRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNewExport(requestParameters: AnalyticsApiCreateNewExportRequest = {}, options?: AxiosRequestConfig): AxiosPromise<object> {
            return localVarFp.createNewExport(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Create a new analytics report for a set of metrics over a specific time span. Different filters (e.g. Inbox v Tag v Teammates) will be joined with AND logic, but the IDs within a filter will be joined with OR logic (e.g. Inbox A or Inbox B, Tag A or Tag B). The report will be executed asynchronously. The response will include a link that can be used to retrieve the report status & result. Refer to the [Analytics](https://dev.frontapp.com/reference/analytics) topic for details about specific metrics. 
         * @summary Create a new analytics report.
         * @param {AnalyticsApiCreateNewReportRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNewReport(requestParameters: AnalyticsApiCreateNewReportRequest, options?: AxiosRequestConfig): AxiosPromise<object> {
            return localVarFp.createNewReport(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Fetch an analytics exports. Refer to the [Analytics](https://dev.frontapp.com/reference/analytics) topic for details about specific metrics.
         * @summary Fetch an analytics export.
         * @param {AnalyticsApiGetExportRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getExport(requestParameters: AnalyticsApiGetExportRequest, options?: AxiosRequestConfig): AxiosPromise<object> {
            return localVarFp.getExport(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Fetch an analytics report. Refer to the [Analytics](https://dev.frontapp.com/reference/analytics) topic for details about specific metrics.
         * @summary Fetch an analytics report.
         * @param {AnalyticsApiGetReportRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getReport(requestParameters: AnalyticsApiGetReportRequest, options?: AxiosRequestConfig): AxiosPromise<object> {
            return localVarFp.getReport(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createNewExport operation in AnalyticsApi.
 * @export
 * @interface AnalyticsApiCreateNewExportRequest
 */
export type AnalyticsApiCreateNewExportRequest = {
    
} & AnalyticsExportRequest

/**
 * Request parameters for createNewReport operation in AnalyticsApi.
 * @export
 * @interface AnalyticsApiCreateNewReportRequest
 */
export type AnalyticsApiCreateNewReportRequest = {
    
} & AnalyticsReportRequest

/**
 * Request parameters for getExport operation in AnalyticsApi.
 * @export
 * @interface AnalyticsApiGetExportRequest
 */
export type AnalyticsApiGetExportRequest = {
    
    /**
    * The export ID.
    * @type {string}
    * @memberof AnalyticsApiGetExport
    */
    readonly exportId: string
    
}

/**
 * Request parameters for getReport operation in AnalyticsApi.
 * @export
 * @interface AnalyticsApiGetReportRequest
 */
export type AnalyticsApiGetReportRequest = {
    
    /**
    * The report UID.
    * @type {string}
    * @memberof AnalyticsApiGetReport
    */
    readonly reportUid: string
    
}

/**
 * AnalyticsApiGenerated - object-oriented interface
 * @export
 * @class AnalyticsApiGenerated
 * @extends {BaseAPI}
 */
export class AnalyticsApiGenerated extends BaseAPI {
    /**
     * Create a new analytics export of messages or events (activities) over a specific time span. The export will be executed asynchronously. The response will include a link that can be used to retrieve the export status & result. Refer to the [Analytics](https://dev.frontapp.com/reference/analytics) topic for details about specific metrics. 
     * @summary Create a new analytics export.
     * @param {AnalyticsApiCreateNewExportRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AnalyticsApiGenerated
     */
    public createNewExport(requestParameters: AnalyticsApiCreateNewExportRequest = {}, options?: AxiosRequestConfig) {
        return AnalyticsApiFp(this.configuration).createNewExport(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Create a new analytics report for a set of metrics over a specific time span. Different filters (e.g. Inbox v Tag v Teammates) will be joined with AND logic, but the IDs within a filter will be joined with OR logic (e.g. Inbox A or Inbox B, Tag A or Tag B). The report will be executed asynchronously. The response will include a link that can be used to retrieve the report status & result. Refer to the [Analytics](https://dev.frontapp.com/reference/analytics) topic for details about specific metrics. 
     * @summary Create a new analytics report.
     * @param {AnalyticsApiCreateNewReportRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AnalyticsApiGenerated
     */
    public createNewReport(requestParameters: AnalyticsApiCreateNewReportRequest, options?: AxiosRequestConfig) {
        return AnalyticsApiFp(this.configuration).createNewReport(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Fetch an analytics exports. Refer to the [Analytics](https://dev.frontapp.com/reference/analytics) topic for details about specific metrics.
     * @summary Fetch an analytics export.
     * @param {AnalyticsApiGetExportRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AnalyticsApiGenerated
     */
    public getExport(requestParameters: AnalyticsApiGetExportRequest, options?: AxiosRequestConfig) {
        return AnalyticsApiFp(this.configuration).getExport(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Fetch an analytics report. Refer to the [Analytics](https://dev.frontapp.com/reference/analytics) topic for details about specific metrics.
     * @summary Fetch an analytics report.
     * @param {AnalyticsApiGetReportRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AnalyticsApiGenerated
     */
    public getReport(requestParameters: AnalyticsApiGetReportRequest, options?: AxiosRequestConfig) {
        return AnalyticsApiFp(this.configuration).getReport(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
