/*
Core API

Front is a customer operations platform that enables support, sales, and account management teams to deliver exceptional service at scale. Front streamlines customer communication by combining the efficiency of a help desk and the familiarity of email, with automated workflows and real-time collaboration behind the scenes.

With Front, teams can centralize messages across channels, route them to the right person, and unlock visibility and insights across all of their customer operations. More than 8000 businesses use Front to drive operational efficiency that prevents churn, improves retention, and propels customer growth.

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { KnowledgeBaseCategorySlimResponse } from './knowledge-base-category-slim-response';
import { KnowledgeBasesListCategoriesInBaseResponseLinks } from './knowledge-bases-list-categories-in-base-response-links';
import { KnowledgeBasesListCategoriesInBaseResponsePagination } from './knowledge-bases-list-categories-in-base-response-pagination';

/**
 * 
 * @export
 * @interface KnowledgeBasesListCategoriesInBaseResponse
 */
export interface KnowledgeBasesListCategoriesInBaseResponse {
    /**
     * 
     * @type {KnowledgeBasesListCategoriesInBaseResponsePagination}
     * @memberof KnowledgeBasesListCategoriesInBaseResponse
     */
    '_pagination'?: KnowledgeBasesListCategoriesInBaseResponsePagination;
    /**
     * 
     * @type {KnowledgeBasesListCategoriesInBaseResponseLinks}
     * @memberof KnowledgeBasesListCategoriesInBaseResponse
     */
    '_links'?: KnowledgeBasesListCategoriesInBaseResponseLinks;
    /**
     * 
     * @type {Array<KnowledgeBaseCategorySlimResponse>}
     * @memberof KnowledgeBasesListCategoriesInBaseResponse
     */
    '_results'?: Array<KnowledgeBaseCategorySlimResponse>;
}

