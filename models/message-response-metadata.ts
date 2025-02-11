/*
Core API

Front is a customer operations platform that enables support, sales, and account management teams to deliver exceptional service at scale. Front streamlines customer communication by combining the efficiency of a help desk and the familiarity of email, with automated workflows and real-time collaboration behind the scenes.

With Front, teams can centralize messages across channels, route them to the right person, and unlock visibility and insights across all of their customer operations. More than 8000 businesses use Front to drive operational efficiency that prevents churn, improves retention, and propels customer growth.

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Optional metadata about the message
 * @export
 * @interface MessageResponseMetadata
 */
export interface MessageResponseMetadata {
    /**
     * For `intercom` messages only. URL of the Intercom conversation the message is coming from.
     * @type {string}
     * @memberof MessageResponseMetadata
     */
    'intercom_url'?: string;
    /**
     * For `truly-call` messages only. Length of the call in seconds.
     * @type {number}
     * @memberof MessageResponseMetadata
     */
    'duration'?: number;
    /**
     * For `truly-call` messages only. Whether or not the call have been answered.
     * @type {boolean}
     * @memberof MessageResponseMetadata
     */
    'have_been_answered'?: boolean;
    /**
     * For `tweet` or \'custom\' (partner channel token authenticated) messages only. Unique message identifier in the underlying provider (Twitter or Partner). For custom messages, only present for partner channel token authenticated requests.
     * @type {string}
     * @memberof MessageResponseMetadata
     */
    'external_id'?: string;
    /**
     * For `tweet` messages only. URL of the tweet.
     * @type {string}
     * @memberof MessageResponseMetadata
     */
    'twitter_url'?: string;
    /**
     * For `tweet` messages only. Whether or not the tweet is a retweet.
     * @type {boolean}
     * @memberof MessageResponseMetadata
     */
    'is_retweet'?: boolean;
    /**
     * For `tweet` messages only. Whether or not the tweet have been retweeted.
     * @type {boolean}
     * @memberof MessageResponseMetadata
     */
    'have_been_retweeted'?: boolean;
    /**
     * For `tweet` messages only. Whether or not the tweet have been favorited.
     * @type {boolean}
     * @memberof MessageResponseMetadata
     */
    'have_been_favorited'?: boolean;
    /**
     * For `custom` messages only. Custom reference which is used to thread messages.
     * @type {string}
     * @memberof MessageResponseMetadata
     */
    'thread_ref'?: string;
    /**
     * For `custom` messages only. Custom object holding internal information.
     * @type {object}
     * @memberof MessageResponseMetadata
     */
    'headers'?: object;
    /**
     * For `front_chat` messages only. Source URL from the chat widget when sending a message.
     * @type {string}
     * @memberof MessageResponseMetadata
     */
    'chat_visitor_url'?: string;
}

