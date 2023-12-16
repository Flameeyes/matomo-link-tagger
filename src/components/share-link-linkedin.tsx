// SPDX-FileCopyrightText: 2023 Diego Elio Pettenò
//
// SPDX-License-Identifier: MIT

import { ShareGeneratorProps } from "@/lib/share-link-api";
import ShareLink from "./share-link";

type ShareLinkLinkedInProps = ShareGeneratorProps;

const ShareLinkLinkedIn = ({ url }: ShareLinkLinkedInProps) => {

    var shareUrl = '';
    if (url) {
        var fbSharerUrl = new URL("https://www.linkedin.com/sharing/share-offsite/");
        fbSharerUrl.searchParams.set('url', url);
        shareUrl = fbSharerUrl.toString();
    }

    return (
        <ShareLink url={shareUrl} />
    )
}

export default ShareLinkLinkedIn;
