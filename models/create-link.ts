/*
Core API

Front is a customer operations platform that enables support, sales, and account management teams to deliver exceptional service at scale. Front streamlines customer communication by combining the efficiency of a help desk and the familiarity of email, with automated workflows and real-time collaboration behind the scenes.

With Front, teams can centralize messages across channels, route them to the right person, and unlock visibility and insights across all of their customer operations. More than 8000 businesses use Front to drive operational efficiency that prevents churn, improves retention, and propels customer growth.

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * A link is used to connect a Front conversation to an external resource.
 * @export
 * @interface CreateLink
 */
export interface CreateLink {
    /**
     * Name of the link. If none is specified, the external_url is used as a default
     * @type {string}
     * @memberof CreateLink
     */
    'name'?: string;
    /**
     * Underlying identifying url of the link
     * @type {string}
     * @memberof CreateLink
     */
    'external_url'?: string;
    /**
     * The string that dynamic object configurations will match on to update a specific dynamic object. For example, if you\'ve configured a dynamic object to match on ORDER-{Digits}, and you want to specifically update the dynamic objects for ORDER-777 to retrieve the latest information from external systems, send \"ORDER-777\". Repeat for other specific identifiers, such as \"ORDER-435\".
     * @type {string}
     * @memberof CreateLink
     */
    'pattern'?: string;
}

