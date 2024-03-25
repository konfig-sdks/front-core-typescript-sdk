/*
Core API

Front is a customer operations platform that enables support, sales, and account management teams to deliver exceptional service at scale. Front streamlines customer communication by combining the efficiency of a help desk and the familiarity of email, with automated workflows and real-time collaboration behind the scenes.

With Front, teams can centralize messages across channels, route them to the right person, and unlock visibility and insights across all of their customer operations. More than 8000 businesses use Front to drive operational efficiency that prevents churn, improves retention, and propels customer growth.

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface UpdateMessageTemplate
 */
export interface UpdateMessageTemplate {
    /**
     * Name of the message template
     * @type {string}
     * @memberof UpdateMessageTemplate
     */
    'name'?: string;
    /**
     * Subject of the message template
     * @type {string}
     * @memberof UpdateMessageTemplate
     */
    'subject'?: string;
    /**
     * Body of the message template
     * @type {string}
     * @memberof UpdateMessageTemplate
     */
    'body'?: string;
    /**
     * ID of the parent folder to be placed into. Goes into the root folder if unspecified or if null.
     * @type {string}
     * @memberof UpdateMessageTemplate
     */
    'folder_id'?: string;
    /**
     * The specific inboxes this template is available in. If null, then it will be available in all inboxes. Array should be non-empty. If unspecified, will retain previous value.
     * @type {Array<string>}
     * @memberof UpdateMessageTemplate
     */
    'inbox_ids'?: Array<string>;
    /**
     * Binary data of attached files. Must use `Content-Type: multipart/form-data` if specified. See [example](https://dev.frontapp.com/docs/attachments-1). Max 25 MB. Specify an empty array to delete all attachments from a message template. If unspecified, it will retain previous value.
     * @type {Array<Uint8Array | File | buffer.File>}
     * @memberof UpdateMessageTemplate
     */
    'attachments'?: Array<Uint8Array | File | buffer.File>;
}

