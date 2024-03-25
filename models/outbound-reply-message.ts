/*
Core API

Front is a customer operations platform that enables support, sales, and account management teams to deliver exceptional service at scale. Front streamlines customer communication by combining the efficiency of a help desk and the familiarity of email, with automated workflows and real-time collaboration behind the scenes.

With Front, teams can centralize messages across channels, route them to the right person, and unlock visibility and insights across all of their customer operations. More than 8000 businesses use Front to drive operational efficiency that prevents churn, improves retention, and propels customer growth.

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { OutboundReplyMessageOptions } from './outbound-reply-message-options';

/**
 * 
 * @export
 * @interface OutboundReplyMessage
 */
export interface OutboundReplyMessage {
    /**
     * List of the recipient handles who will receive this message
     * @type {Array<string>}
     * @memberof OutboundReplyMessage
     */
    'to'?: Array<string>;
    /**
     * List of the recipient handles who will receive a copy of this message
     * @type {Array<string>}
     * @memberof OutboundReplyMessage
     */
    'cc'?: Array<string>;
    /**
     * List of the recipient handles who will receive a copy of this message
     * @type {Array<string>}
     * @memberof OutboundReplyMessage
     */
    'bcc'?: Array<string>;
    /**
     * Name used for the sender info of the message
     * @type {string}
     * @memberof OutboundReplyMessage
     */
    'sender_name'?: string;
    /**
     * Subject of the message for email message
     * @type {string}
     * @memberof OutboundReplyMessage
     */
    'subject'?: string;
    /**
     * ID of the teammate on behalf of whom the answer is sent
     * @type {string}
     * @memberof OutboundReplyMessage
     */
    'author_id'?: string;
    /**
     * Channel ID the message is sent from
     * @type {string}
     * @memberof OutboundReplyMessage
     */
    'channel_id'?: string;
    /**
     * Body of the message
     * @type {string}
     * @memberof OutboundReplyMessage
     */
    'body': string;
    /**
     * Text version of the body for email messages
     * @type {string}
     * @memberof OutboundReplyMessage
     */
    'text'?: string;
    /**
     * Body for the quote that the message is referencing. Only available on email channels.
     * @type {string}
     * @memberof OutboundReplyMessage
     */
    'quote_body'?: string;
    /**
     * 
     * @type {OutboundReplyMessageOptions}
     * @memberof OutboundReplyMessage
     */
    'options'?: OutboundReplyMessageOptions;
    /**
     * Binary data of attached files. Must use `Content-Type: multipart/form-data` if specified. See [example](https://gist.github.com/hdornier/e04d04921032e98271f46ff8a539a4cb) or read more about [Attachments](https://dev.frontapp.com/docs/attachments-1).  Max 25 MB.
     * @type {Array<Uint8Array | File | buffer.File>}
     * @memberof OutboundReplyMessage
     */
    'attachments'?: Array<Uint8Array | File | buffer.File>;
    /**
     * ID of the signature to attach to this draft. If null, no signature is attached.
     * @type {string}
     * @memberof OutboundReplyMessage
     */
    'signature_id'?: string;
    /**
     * Whether or not Front should try to resolve a signature for the message. Is ignored if signature_id is included. Default false;
     * @type {boolean}
     * @memberof OutboundReplyMessage
     */
    'should_add_default_signature'?: boolean;
}

