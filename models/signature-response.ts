/*
Core API

Front is a customer operations platform that enables support, sales, and account management teams to deliver exceptional service at scale. Front streamlines customer communication by combining the efficiency of a help desk and the familiarity of email, with automated workflows and real-time collaboration behind the scenes.

With Front, teams can centralize messages across channels, route them to the right person, and unlock visibility and insights across all of their customer operations. More than 8000 businesses use Front to drive operational efficiency that prevents churn, improves retention, and propels customer growth.

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { SignatureResponseLinks } from './signature-response-links';

/**
 * 
 * @export
 * @interface SignatureResponse
 */
export interface SignatureResponse {
    /**
     * 
     * @type {SignatureResponseLinks}
     * @memberof SignatureResponse
     */
    '_links'?: SignatureResponseLinks;
    /**
     * Unique identifier of the signature
     * @type {string}
     * @memberof SignatureResponse
     */
    'id'?: string;
    /**
     * Name of the signature
     * @type {string}
     * @memberof SignatureResponse
     */
    'name'?: string;
    /**
     * Body of the signature
     * @type {string}
     * @memberof SignatureResponse
     */
    'body'?: string;
    /**
     * Sender info of the signature
     * @type {string}
     * @memberof SignatureResponse
     */
    'sender_info'?: string;
    /**
     * Whether or not the signature is available in teammate channels.
     * @type {boolean}
     * @memberof SignatureResponse
     */
    'is_visible_for_all_teammate_channels'?: boolean;
    /**
     * Whether the signature is the default signature for the team or teammate.
     * @type {boolean}
     * @memberof SignatureResponse
     */
    'is_default'?: boolean;
    /**
     * Whether the signature is private to the teammate.
     * @type {boolean}
     * @memberof SignatureResponse
     */
    'is_private'?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof SignatureResponse
     */
    'channel_ids'?: Array<string>;
}

