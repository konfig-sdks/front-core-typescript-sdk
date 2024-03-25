/*
Core API

Front is a customer operations platform that enables support, sales, and account management teams to deliver exceptional service at scale. Front streamlines customer communication by combining the efficiency of a help desk and the familiarity of email, with automated workflows and real-time collaboration behind the scenes.

With Front, teams can centralize messages across channels, route them to the right person, and unlock visibility and insights across all of their customer operations. More than 8000 businesses use Front to drive operational efficiency that prevents churn, improves retention, and propels customer growth.

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * A signature that can be used to sign messages.
 * @export
 * @interface CreateSharedSignature
 */
export interface CreateSharedSignature {
    /**
     * Name of the signature
     * @type {string}
     * @memberof CreateSharedSignature
     */
    'name': string;
    /**
     * Sender info of the signature that will appear in the From line of emails sent.
     * @type {string}
     * @memberof CreateSharedSignature
     */
    'sender_info'?: string;
    /**
     * Body of the signature
     * @type {string}
     * @memberof CreateSharedSignature
     */
    'body': string;
    /**
     * Whether or not the signature is visible in all individual channels for teammates in the given team.
     * @type {boolean}
     * @memberof CreateSharedSignature
     */
    'is_visible_for_all_teammate_channels'?: boolean;
    /**
     * If true, the signature will be set as the default signature for the team.
     * @type {boolean}
     * @memberof CreateSharedSignature
     */
    'is_default'?: boolean;
    /**
     * The specific channels this signature is available in. If omitted or null, the signature will be available in all channels the team has access to. Alternatively, you can specify channels using a [resource alias](https://dev.frontapp.com/docs/resource-aliases-1).
     * @type {Array<string>}
     * @memberof CreateSharedSignature
     */
    'channel_ids'?: Array<string>;
}

