// SPDX-FileCopyrightText: 2023 Diego Elio Pettenò
//
// SPDX-License-Identifier: MIT

import { ShareGeneratorProps } from "@/lib/share-link-api";
import ShareLink from "./share-link";

type ShareLinkMastodonProps = ShareGeneratorProps;

const ShareLinkMastodon = ({ url }: ShareLinkMastodonProps) => {

    var shareUrl = '';
    if (url) {
        var fbSharerUrl = new URL("https://mastodon.social/share");
        fbSharerUrl.searchParams.set('text', url);
        shareUrl = fbSharerUrl.toString();
    }

    return (
        <ShareLink url={shareUrl} />
    )
}

export default ShareLinkMastodon;
