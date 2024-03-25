/*
Core API

Front is a customer operations platform that enables support, sales, and account management teams to deliver exceptional service at scale. Front streamlines customer communication by combining the efficiency of a help desk and the familiarity of email, with automated workflows and real-time collaboration behind the scenes.

With Front, teams can centralize messages across channels, route them to the right person, and unlock visibility and insights across all of their customer operations. More than 8000 businesses use Front to drive operational efficiency that prevents churn, improves retention, and propels customer growth.

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ContactGroupResponses } from './contact-group-responses';
import { ContactHandle } from './contact-handle';
import { ContactResponseLinks } from './contact-response-links';

/**
 * 
 * @export
 * @interface ContactResponse
 */
export interface ContactResponse {
    /**
     * Contact description
     * @type {string}
     * @memberof ContactResponse
     */
    'description'?: string;
    /**
     * 
     * @type {ContactResponseLinks}
     * @memberof ContactResponse
     */
    '_links'?: ContactResponseLinks;
    /**
     * Unique identifier of the contact
     * @type {string}
     * @memberof ContactResponse
     */
    'id'?: string;
    /**
     * Contact name
     * @type {string}
     * @memberof ContactResponse
     */
    'name'?: string;
    /**
     * URL of the contact\'s avatar
     * @type {string}
     * @memberof ContactResponse
     */
    'avatar_url'?: string;
    /**
     * Whether or not the contact is marked as a spammer
     * @type {boolean}
     * @memberof ContactResponse
     */
    'is_spammer'?: boolean;
    /**
     * List of all the links of the contact
     * @type {Array<string>}
     * @memberof ContactResponse
     */
    'links'?: Array<string>;
    /**
     * List of the groups the contact belongs to.
     * @type {Array<ContactGroupResponses>}
     * @memberof ContactResponse
     */
    'groups'?: Array<ContactGroupResponses>;
    /**
     * List of the handles and sources with which the contact is reachable.
     * @type {Array<ContactHandle>}
     * @memberof ContactResponse
     */
    'handles'?: Array<ContactHandle>;
    /**
     * Custom field attributes for this contact.
     * @type {object}
     * @memberof ContactResponse
     */
    'custom_fields'?: object;
    /**
     * Whether or not the contact is individual
     * @type {boolean}
     * @memberof ContactResponse
     */
    'is_private'?: boolean;
}

