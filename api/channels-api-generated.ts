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
import { ChannelsListResponse } from '../models';
// @ts-ignore
import { ChannelsValidateSmtpSettingsResponse } from '../models';
// @ts-ignore
import { CreateChannel } from '../models';
// @ts-ignore
import { CreateChannelSettings } from '../models';
// @ts-ignore
import { UpdateChannel } from '../models';
// @ts-ignore
import { UpdateChannelSettings } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * ChannelsApi - axios parameter creator
 * @export
 */
export const ChannelsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create a channel in an inbox.
         * @summary Create a channel
         * @param {string} inboxId The Inbox ID
         * @param {CreateChannel} [createChannel] Channel to create
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createInboxChannel: async (inboxId: string, createChannel?: CreateChannel, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'inboxId' is not null or undefined
            assertParamExists('createInboxChannel', 'inboxId', inboxId)
            const localVarPath = `/inboxes/{inbox_id}/channels`
                .replace(`{${"inbox_id"}}`, encodeURIComponent(String(inboxId !== undefined ? inboxId : `-inbox_id-`)));
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
                requestBody: createChannel,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/inboxes/{inbox_id}/channels',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(createChannel, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Fetch a channel.
         * @summary Get channel
         * @param {string} channelId The Channel ID. Alternatively, you can supply the channel address as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getChannel: async (channelId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'channelId' is not null or undefined
            assertParamExists('getChannel', 'channelId', channelId)
            const localVarPath = `/channels/{channel_id}`
                .replace(`{${"channel_id"}}`, encodeURIComponent(String(channelId !== undefined ? channelId : `-channel_id-`)));
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
                pathTemplate: '/channels/{channel_id}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * List the channels of the company.
         * @summary List channels
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        list: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/channels`;
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
                pathTemplate: '/channels',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * List the channels of a team (workspace).
         * @summary List team channels
         * @param {string} teamId The team ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listTeam: async (teamId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'teamId' is not null or undefined
            assertParamExists('listTeam', 'teamId', teamId)
            const localVarPath = `/teams/{team_id}/channels`
                .replace(`{${"team_id"}}`, encodeURIComponent(String(teamId !== undefined ? teamId : `-team_id-`)));
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
                pathTemplate: '/teams/{team_id}/channels',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * List the channels of a teammate.
         * @summary List teammate channels
         * @param {string} teammateId The teammate ID. Alternatively, you can supply an email as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listTeammate: async (teammateId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'teammateId' is not null or undefined
            assertParamExists('listTeammate', 'teammateId', teammateId)
            const localVarPath = `/teammates/{teammate_id}/channels`
                .replace(`{${"teammate_id"}}`, encodeURIComponent(String(teammateId !== undefined ? teammateId : `-teammate_id-`)));
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
                pathTemplate: '/teammates/{teammate_id}/channels',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update a channel.
         * @summary Update Channel
         * @param {string} channelId The Channel ID. Alternatively, you can supply the channel address as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).
         * @param {UpdateChannel} [updateChannel] Channel details
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateChannel: async (channelId: string, updateChannel?: UpdateChannel, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'channelId' is not null or undefined
            assertParamExists('updateChannel', 'channelId', channelId)
            const localVarPath = `/channels/{channel_id}`
                .replace(`{${"channel_id"}}`, encodeURIComponent(String(channelId !== undefined ? channelId : `-channel_id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication http required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: updateChannel,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/channels/{channel_id}',
                httpMethod: 'PATCH'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(updateChannel, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Asynchronously validate an SMTP channel (this endpoint is irrelevant to other channel types). When you create an SMTP channel via the API, [create a channel](https://dev.frontapp.com/reference/post_inboxes-inbox-id-channels) with type smtp and the send_as set to the needed email address. You then [configure the email provider](https://help.front.com/en/articles/2081), after which you use this endpoint to asynchronously validate the SMTP settings.
         * @summary Validate channel
         * @param {string} channelId The Channel ID. Alternatively, you can supply the channel address as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        validateSMTPSettings: async (channelId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'channelId' is not null or undefined
            assertParamExists('validateSMTPSettings', 'channelId', channelId)
            const localVarPath = `/channels/{channel_id}/validate`
                .replace(`{${"channel_id"}}`, encodeURIComponent(String(channelId !== undefined ? channelId : `-channel_id-`)));
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

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/channels/{channel_id}/validate',
                httpMethod: 'POST'
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
 * ChannelsApi - functional programming interface
 * @export
 */
export const ChannelsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ChannelsApiAxiosParamCreator(configuration)
    return {
        /**
         * Create a channel in an inbox.
         * @summary Create a channel
         * @param {ChannelsApiCreateInboxChannelRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createInboxChannel(requestParameters: ChannelsApiCreateInboxChannelRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const createChannel: CreateChannel = {
                name: requestParameters.name,
                settings: requestParameters.settings,
                type: requestParameters.type,
                send_as: requestParameters.send_as
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.createInboxChannel(requestParameters.inboxId, createChannel, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Fetch a channel.
         * @summary Get channel
         * @param {ChannelsApiGetChannelRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getChannel(requestParameters: ChannelsApiGetChannelRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getChannel(requestParameters.channelId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * List the channels of the company.
         * @summary List channels
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async list(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ChannelsListResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.list(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * List the channels of a team (workspace).
         * @summary List team channels
         * @param {ChannelsApiListTeamRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listTeam(requestParameters: ChannelsApiListTeamRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ChannelsListResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listTeam(requestParameters.teamId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * List the channels of a teammate.
         * @summary List teammate channels
         * @param {ChannelsApiListTeammateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listTeammate(requestParameters: ChannelsApiListTeammateRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ChannelsListResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listTeammate(requestParameters.teammateId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Update a channel.
         * @summary Update Channel
         * @param {ChannelsApiUpdateChannelRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateChannel(requestParameters: ChannelsApiUpdateChannelRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const updateChannel: UpdateChannel = {
                name: requestParameters.name,
                inbox_id: requestParameters.inbox_id,
                settings: requestParameters.settings
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateChannel(requestParameters.channelId, updateChannel, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Asynchronously validate an SMTP channel (this endpoint is irrelevant to other channel types). When you create an SMTP channel via the API, [create a channel](https://dev.frontapp.com/reference/post_inboxes-inbox-id-channels) with type smtp and the send_as set to the needed email address. You then [configure the email provider](https://help.front.com/en/articles/2081), after which you use this endpoint to asynchronously validate the SMTP settings.
         * @summary Validate channel
         * @param {ChannelsApiValidateSMTPSettingsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async validateSMTPSettings(requestParameters: ChannelsApiValidateSMTPSettingsRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ChannelsValidateSmtpSettingsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.validateSMTPSettings(requestParameters.channelId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ChannelsApi - factory interface
 * @export
 */
export const ChannelsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ChannelsApiFp(configuration)
    return {
        /**
         * Create a channel in an inbox.
         * @summary Create a channel
         * @param {ChannelsApiCreateInboxChannelRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createInboxChannel(requestParameters: ChannelsApiCreateInboxChannelRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.createInboxChannel(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Fetch a channel.
         * @summary Get channel
         * @param {ChannelsApiGetChannelRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getChannel(requestParameters: ChannelsApiGetChannelRequest, options?: AxiosRequestConfig): AxiosPromise<object> {
            return localVarFp.getChannel(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * List the channels of the company.
         * @summary List channels
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        list(options?: AxiosRequestConfig): AxiosPromise<ChannelsListResponse> {
            return localVarFp.list(options).then((request) => request(axios, basePath));
        },
        /**
         * List the channels of a team (workspace).
         * @summary List team channels
         * @param {ChannelsApiListTeamRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listTeam(requestParameters: ChannelsApiListTeamRequest, options?: AxiosRequestConfig): AxiosPromise<ChannelsListResponse> {
            return localVarFp.listTeam(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * List the channels of a teammate.
         * @summary List teammate channels
         * @param {ChannelsApiListTeammateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listTeammate(requestParameters: ChannelsApiListTeammateRequest, options?: AxiosRequestConfig): AxiosPromise<ChannelsListResponse> {
            return localVarFp.listTeammate(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Update a channel.
         * @summary Update Channel
         * @param {ChannelsApiUpdateChannelRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateChannel(requestParameters: ChannelsApiUpdateChannelRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.updateChannel(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Asynchronously validate an SMTP channel (this endpoint is irrelevant to other channel types). When you create an SMTP channel via the API, [create a channel](https://dev.frontapp.com/reference/post_inboxes-inbox-id-channels) with type smtp and the send_as set to the needed email address. You then [configure the email provider](https://help.front.com/en/articles/2081), after which you use this endpoint to asynchronously validate the SMTP settings.
         * @summary Validate channel
         * @param {ChannelsApiValidateSMTPSettingsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        validateSMTPSettings(requestParameters: ChannelsApiValidateSMTPSettingsRequest, options?: AxiosRequestConfig): AxiosPromise<ChannelsValidateSmtpSettingsResponse> {
            return localVarFp.validateSMTPSettings(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createInboxChannel operation in ChannelsApi.
 * @export
 * @interface ChannelsApiCreateInboxChannelRequest
 */
export type ChannelsApiCreateInboxChannelRequest = {
    
    /**
    * The Inbox ID
    * @type {string}
    * @memberof ChannelsApiCreateInboxChannel
    */
    readonly inboxId: string
    
} & CreateChannel

/**
 * Request parameters for getChannel operation in ChannelsApi.
 * @export
 * @interface ChannelsApiGetChannelRequest
 */
export type ChannelsApiGetChannelRequest = {
    
    /**
    * The Channel ID. Alternatively, you can supply the channel address as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).
    * @type {string}
    * @memberof ChannelsApiGetChannel
    */
    readonly channelId: string
    
}

/**
 * Request parameters for listTeam operation in ChannelsApi.
 * @export
 * @interface ChannelsApiListTeamRequest
 */
export type ChannelsApiListTeamRequest = {
    
    /**
    * The team ID
    * @type {string}
    * @memberof ChannelsApiListTeam
    */
    readonly teamId: string
    
}

/**
 * Request parameters for listTeammate operation in ChannelsApi.
 * @export
 * @interface ChannelsApiListTeammateRequest
 */
export type ChannelsApiListTeammateRequest = {
    
    /**
    * The teammate ID. Alternatively, you can supply an email as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).
    * @type {string}
    * @memberof ChannelsApiListTeammate
    */
    readonly teammateId: string
    
}

/**
 * Request parameters for updateChannel operation in ChannelsApi.
 * @export
 * @interface ChannelsApiUpdateChannelRequest
 */
export type ChannelsApiUpdateChannelRequest = {
    
    /**
    * The Channel ID. Alternatively, you can supply the channel address as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).
    * @type {string}
    * @memberof ChannelsApiUpdateChannel
    */
    readonly channelId: string
    
} & UpdateChannel

/**
 * Request parameters for validateSMTPSettings operation in ChannelsApi.
 * @export
 * @interface ChannelsApiValidateSMTPSettingsRequest
 */
export type ChannelsApiValidateSMTPSettingsRequest = {
    
    /**
    * The Channel ID. Alternatively, you can supply the channel address as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).
    * @type {string}
    * @memberof ChannelsApiValidateSMTPSettings
    */
    readonly channelId: string
    
}

/**
 * ChannelsApiGenerated - object-oriented interface
 * @export
 * @class ChannelsApiGenerated
 * @extends {BaseAPI}
 */
export class ChannelsApiGenerated extends BaseAPI {
    /**
     * Create a channel in an inbox.
     * @summary Create a channel
     * @param {ChannelsApiCreateInboxChannelRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChannelsApiGenerated
     */
    public createInboxChannel(requestParameters: ChannelsApiCreateInboxChannelRequest, options?: AxiosRequestConfig) {
        return ChannelsApiFp(this.configuration).createInboxChannel(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Fetch a channel.
     * @summary Get channel
     * @param {ChannelsApiGetChannelRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChannelsApiGenerated
     */
    public getChannel(requestParameters: ChannelsApiGetChannelRequest, options?: AxiosRequestConfig) {
        return ChannelsApiFp(this.configuration).getChannel(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * List the channels of the company.
     * @summary List channels
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChannelsApiGenerated
     */
    public list(options?: AxiosRequestConfig) {
        return ChannelsApiFp(this.configuration).list(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * List the channels of a team (workspace).
     * @summary List team channels
     * @param {ChannelsApiListTeamRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChannelsApiGenerated
     */
    public listTeam(requestParameters: ChannelsApiListTeamRequest, options?: AxiosRequestConfig) {
        return ChannelsApiFp(this.configuration).listTeam(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * List the channels of a teammate.
     * @summary List teammate channels
     * @param {ChannelsApiListTeammateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChannelsApiGenerated
     */
    public listTeammate(requestParameters: ChannelsApiListTeammateRequest, options?: AxiosRequestConfig) {
        return ChannelsApiFp(this.configuration).listTeammate(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update a channel.
     * @summary Update Channel
     * @param {ChannelsApiUpdateChannelRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChannelsApiGenerated
     */
    public updateChannel(requestParameters: ChannelsApiUpdateChannelRequest, options?: AxiosRequestConfig) {
        return ChannelsApiFp(this.configuration).updateChannel(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Asynchronously validate an SMTP channel (this endpoint is irrelevant to other channel types). When you create an SMTP channel via the API, [create a channel](https://dev.frontapp.com/reference/post_inboxes-inbox-id-channels) with type smtp and the send_as set to the needed email address. You then [configure the email provider](https://help.front.com/en/articles/2081), after which you use this endpoint to asynchronously validate the SMTP settings.
     * @summary Validate channel
     * @param {ChannelsApiValidateSMTPSettingsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChannelsApiGenerated
     */
    public validateSMTPSettings(requestParameters: ChannelsApiValidateSMTPSettingsRequest, options?: AxiosRequestConfig) {
        return ChannelsApiFp(this.configuration).validateSMTPSettings(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
