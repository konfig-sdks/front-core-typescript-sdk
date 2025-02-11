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
import { CreateDraft } from '../models';
// @ts-ignore
import { DeleteDraft } from '../models';
// @ts-ignore
import { DraftsListConversationDraftsResponse } from '../models';
// @ts-ignore
import { EditDraft } from '../models';
// @ts-ignore
import { ReplyDraft } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * DraftsApi - axios parameter creator
 * @export
 */
export const DraftsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create a new draft as a reply to the last message in the conversation.
         * @summary Create draft reply
         * @param {string} conversationId The conversation ID
         * @param {ReplyDraft} [replyDraft] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createDraftReply: async (conversationId: string, replyDraft?: ReplyDraft, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'conversationId' is not null or undefined
            assertParamExists('createDraftReply', 'conversationId', conversationId)
            const localVarPath = `/conversations/{conversation_id}/drafts`
                .replace(`{${"conversation_id"}}`, encodeURIComponent(String(conversationId !== undefined ? conversationId : `-conversation_id-`)));
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
                requestBody: replyDraft,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/conversations/{conversation_id}/drafts',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(replyDraft, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Create a draft message which is the first message of a new [conversation](https://dev.frontapp.com/reference/conversations).
         * @summary Create draft
         * @param {string} channelId The channel ID. Alternatively, you can supply the channel address as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).
         * @param {CreateDraft} [createDraft] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNewDraftMessage: async (channelId: string, createDraft?: CreateDraft, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'channelId' is not null or undefined
            assertParamExists('createNewDraftMessage', 'channelId', channelId)
            const localVarPath = `/channels/{channel_id}/drafts`
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

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: createDraft,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/channels/{channel_id}/drafts',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(createDraft, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete a draft message.
         * @summary Delete draft
         * @param {string} draftId The draft ID
         * @param {DeleteDraft} [deleteDraft] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteDraftMessage: async (draftId: string, deleteDraft?: DeleteDraft, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'draftId' is not null or undefined
            assertParamExists('deleteDraftMessage', 'draftId', draftId)
            const localVarPath = `/drafts/{draft_id}`
                .replace(`{${"draft_id"}}`, encodeURIComponent(String(draftId !== undefined ? draftId : `-draft_id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication http required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: deleteDraft,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/drafts/{draft_id}',
                httpMethod: 'DELETE'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(deleteDraft, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Edit a draft message.
         * @summary Edit draft
         * @param {string} messageId The draft ID
         * @param {EditDraft} [editDraft] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        editMessage: async (messageId: string, editDraft?: EditDraft, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'messageId' is not null or undefined
            assertParamExists('editMessage', 'messageId', messageId)
            const localVarPath = `/drafts/{message_id}`
                .replace(`{${"message_id"}}`, encodeURIComponent(String(messageId !== undefined ? messageId : `-message_id-`)));
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
                requestBody: editDraft,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/drafts/{message_id}',
                httpMethod: 'PATCH'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(editDraft, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * List the drafts in a conversation.
         * @summary List conversation drafts
         * @param {string} conversationId The conversation ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listConversationDrafts: async (conversationId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'conversationId' is not null or undefined
            assertParamExists('listConversationDrafts', 'conversationId', conversationId)
            const localVarPath = `/conversations/{conversation_id}/drafts`
                .replace(`{${"conversation_id"}}`, encodeURIComponent(String(conversationId !== undefined ? conversationId : `-conversation_id-`)));
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
                pathTemplate: '/conversations/{conversation_id}/drafts',
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
 * DraftsApi - functional programming interface
 * @export
 */
export const DraftsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DraftsApiAxiosParamCreator(configuration)
    return {
        /**
         * Create a new draft as a reply to the last message in the conversation.
         * @summary Create draft reply
         * @param {DraftsApiCreateDraftReplyRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createDraftReply(requestParameters: DraftsApiCreateDraftReplyRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const replyDraft: ReplyDraft = {
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.createDraftReply(requestParameters.conversationId, replyDraft, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Create a draft message which is the first message of a new [conversation](https://dev.frontapp.com/reference/conversations).
         * @summary Create draft
         * @param {DraftsApiCreateNewDraftMessageRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createNewDraftMessage(requestParameters: DraftsApiCreateNewDraftMessageRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const createDraft: CreateDraft = {
                author_id: requestParameters.author_id,
                to: requestParameters.to,
                cc: requestParameters.cc,
                bcc: requestParameters.bcc,
                subject: requestParameters.subject,
                body: requestParameters.body,
                quote_body: requestParameters.quote_body,
                attachments: requestParameters.attachments,
                mode: requestParameters.mode,
                signature_id: requestParameters.signature_id,
                should_add_default_signature: requestParameters.should_add_default_signature
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.createNewDraftMessage(requestParameters.channelId, createDraft, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Delete a draft message.
         * @summary Delete draft
         * @param {DraftsApiDeleteDraftMessageRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteDraftMessage(requestParameters: DraftsApiDeleteDraftMessageRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const deleteDraft: DeleteDraft = {
                version: requestParameters.version
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteDraftMessage(requestParameters.draftId, deleteDraft, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Edit a draft message.
         * @summary Edit draft
         * @param {DraftsApiEditMessageRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async editMessage(requestParameters: DraftsApiEditMessageRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const editDraft: EditDraft = requestParameters;
            const localVarAxiosArgs = await localVarAxiosParamCreator.editMessage(requestParameters.messageId, editDraft, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * List the drafts in a conversation.
         * @summary List conversation drafts
         * @param {DraftsApiListConversationDraftsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listConversationDrafts(requestParameters: DraftsApiListConversationDraftsRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DraftsListConversationDraftsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listConversationDrafts(requestParameters.conversationId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * DraftsApi - factory interface
 * @export
 */
export const DraftsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DraftsApiFp(configuration)
    return {
        /**
         * Create a new draft as a reply to the last message in the conversation.
         * @summary Create draft reply
         * @param {DraftsApiCreateDraftReplyRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createDraftReply(requestParameters: DraftsApiCreateDraftReplyRequest, options?: AxiosRequestConfig): AxiosPromise<object> {
            return localVarFp.createDraftReply(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Create a draft message which is the first message of a new [conversation](https://dev.frontapp.com/reference/conversations).
         * @summary Create draft
         * @param {DraftsApiCreateNewDraftMessageRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNewDraftMessage(requestParameters: DraftsApiCreateNewDraftMessageRequest, options?: AxiosRequestConfig): AxiosPromise<object> {
            return localVarFp.createNewDraftMessage(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete a draft message.
         * @summary Delete draft
         * @param {DraftsApiDeleteDraftMessageRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteDraftMessage(requestParameters: DraftsApiDeleteDraftMessageRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.deleteDraftMessage(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Edit a draft message.
         * @summary Edit draft
         * @param {DraftsApiEditMessageRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        editMessage(requestParameters: DraftsApiEditMessageRequest, options?: AxiosRequestConfig): AxiosPromise<object> {
            return localVarFp.editMessage(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * List the drafts in a conversation.
         * @summary List conversation drafts
         * @param {DraftsApiListConversationDraftsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listConversationDrafts(requestParameters: DraftsApiListConversationDraftsRequest, options?: AxiosRequestConfig): AxiosPromise<DraftsListConversationDraftsResponse> {
            return localVarFp.listConversationDrafts(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createDraftReply operation in DraftsApi.
 * @export
 * @interface DraftsApiCreateDraftReplyRequest
 */
export type DraftsApiCreateDraftReplyRequest = {
    
    /**
    * The conversation ID
    * @type {string}
    * @memberof DraftsApiCreateDraftReply
    */
    readonly conversationId: string
    
} & ReplyDraft

/**
 * Request parameters for createNewDraftMessage operation in DraftsApi.
 * @export
 * @interface DraftsApiCreateNewDraftMessageRequest
 */
export type DraftsApiCreateNewDraftMessageRequest = {
    
    /**
    * The channel ID. Alternatively, you can supply the channel address as a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).
    * @type {string}
    * @memberof DraftsApiCreateNewDraftMessage
    */
    readonly channelId: string
    
} & CreateDraft

/**
 * Request parameters for deleteDraftMessage operation in DraftsApi.
 * @export
 * @interface DraftsApiDeleteDraftMessageRequest
 */
export type DraftsApiDeleteDraftMessageRequest = {
    
    /**
    * The draft ID
    * @type {string}
    * @memberof DraftsApiDeleteDraftMessage
    */
    readonly draftId: string
    
} & DeleteDraft

/**
 * Request parameters for editMessage operation in DraftsApi.
 * @export
 * @interface DraftsApiEditMessageRequest
 */
export type DraftsApiEditMessageRequest = {
    
    /**
    * The draft ID
    * @type {string}
    * @memberof DraftsApiEditMessage
    */
    readonly messageId: string
    
} & EditDraft

/**
 * Request parameters for listConversationDrafts operation in DraftsApi.
 * @export
 * @interface DraftsApiListConversationDraftsRequest
 */
export type DraftsApiListConversationDraftsRequest = {
    
    /**
    * The conversation ID
    * @type {string}
    * @memberof DraftsApiListConversationDrafts
    */
    readonly conversationId: string
    
}

/**
 * DraftsApiGenerated - object-oriented interface
 * @export
 * @class DraftsApiGenerated
 * @extends {BaseAPI}
 */
export class DraftsApiGenerated extends BaseAPI {
    /**
     * Create a new draft as a reply to the last message in the conversation.
     * @summary Create draft reply
     * @param {DraftsApiCreateDraftReplyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DraftsApiGenerated
     */
    public createDraftReply(requestParameters: DraftsApiCreateDraftReplyRequest, options?: AxiosRequestConfig) {
        return DraftsApiFp(this.configuration).createDraftReply(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Create a draft message which is the first message of a new [conversation](https://dev.frontapp.com/reference/conversations).
     * @summary Create draft
     * @param {DraftsApiCreateNewDraftMessageRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DraftsApiGenerated
     */
    public createNewDraftMessage(requestParameters: DraftsApiCreateNewDraftMessageRequest, options?: AxiosRequestConfig) {
        return DraftsApiFp(this.configuration).createNewDraftMessage(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Delete a draft message.
     * @summary Delete draft
     * @param {DraftsApiDeleteDraftMessageRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DraftsApiGenerated
     */
    public deleteDraftMessage(requestParameters: DraftsApiDeleteDraftMessageRequest, options?: AxiosRequestConfig) {
        return DraftsApiFp(this.configuration).deleteDraftMessage(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Edit a draft message.
     * @summary Edit draft
     * @param {DraftsApiEditMessageRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DraftsApiGenerated
     */
    public editMessage(requestParameters: DraftsApiEditMessageRequest, options?: AxiosRequestConfig) {
        return DraftsApiFp(this.configuration).editMessage(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * List the drafts in a conversation.
     * @summary List conversation drafts
     * @param {DraftsApiListConversationDraftsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DraftsApiGenerated
     */
    public listConversationDrafts(requestParameters: DraftsApiListConversationDraftsRequest, options?: AxiosRequestConfig) {
        return DraftsApiFp(this.configuration).listConversationDrafts(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
