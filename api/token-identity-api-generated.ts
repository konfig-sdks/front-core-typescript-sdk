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
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * TokenIdentityApi - axios parameter creator
 * @export
 */
export const TokenIdentityApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Fetch the details of the API token.
         * @summary API Token details
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDetails: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/me`;
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
                pathTemplate: '/me',
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
 * TokenIdentityApi - functional programming interface
 * @export
 */
export const TokenIdentityApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TokenIdentityApiAxiosParamCreator(configuration)
    return {
        /**
         * Fetch the details of the API token.
         * @summary API Token details
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getDetails(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getDetails(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TokenIdentityApi - factory interface
 * @export
 */
export const TokenIdentityApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TokenIdentityApiFp(configuration)
    return {
        /**
         * Fetch the details of the API token.
         * @summary API Token details
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDetails(options?: AxiosRequestConfig): AxiosPromise<object> {
            return localVarFp.getDetails(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TokenIdentityApiGenerated - object-oriented interface
 * @export
 * @class TokenIdentityApiGenerated
 * @extends {BaseAPI}
 */
export class TokenIdentityApiGenerated extends BaseAPI {
    /**
     * Fetch the details of the API token.
     * @summary API Token details
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TokenIdentityApiGenerated
     */
    public getDetails(options?: AxiosRequestConfig) {
        return TokenIdentityApiFp(this.configuration).getDetails(options).then((request) => request(this.axios, this.basePath));
    }
}
