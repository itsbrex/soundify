import { JSONObject } from "shared/mod.ts";
import {
	type ExternalUrls,
	type Followers,
	type Image,
} from "api/general.types.ts";

export interface UserPublic extends JSONObject {
	/**
	 * The name displayed on the user's profile.
	 * `null` if not available
	 */
	display_name: string | null;
	/**
	 * Known external URLs for this user.
	 */
	external_urls: ExternalUrls;
	/**
	 * Information about the followers of the user.
	 */
	followers?: Followers;
	/**
	 * A link to the Web API endpoint for this user.
	 */
	href: string;
	/**
	 * The Spotify user ID for the user.
	 */
	id: string;
	/**
	 * The object type: "user"
	 */
	type: "user";
	/**
	 * The user's profile image.
	 */
	images?: Image[];
	/**
	 * The Spotify URI for the user.
	 */
	uri: string;
}

/**
 * The product type in the User object.
 */
export type UserProductType = "free" | "open" | "premium";

/**
 * The spotify api object containing the information of explicit content.
 */
export interface ExplicitContentSettings extends JSONObject {
	/**
	 * When true, indicates that explicit content should not be played.
	 */
	filter_enabled: boolean;
	/**
	 * When true, indicates that the explicit content setting is locked
	 * and can't be changed by the user.
	 */
	filter_locked: boolean;
}

export interface UserPrivate extends UserPublic, JSONObject {
	/**
	 * The country of the user, as set in the user's account profile.
	 * An ISO 3166-1 alpha-2 country code.
	 *
	 * @requires `user-read-private`
	 */
	country: string;
	/**
	 * The user's email address, as entered by the user when creating
	 * their account.
	 *
	 * _Important_! _This email address is unverified_;
	 * there is no proof that it actually belongs to the user.
	 *
	 * @requires `user-read-email`
	 */
	email: string;
	/**
	 * The user's explicit content settings.
	 *
	 * @requires `user-read-private`
	 */
	explicit_content?: ExplicitContentSettings;
	/**
	 * The user's Spotify subscription level: "premium", "free", etc.
	 * (The subscription level "open" can be considered the same as "free".)
	 *
	 * @requires `user-read-private`
	 */
	product?: UserProductType;
	/**
	 * The user's profile image.
	 */
	images: Image[];
	/**
	 * Information about the followers of the user.
	 */
	followers: Followers;
}
