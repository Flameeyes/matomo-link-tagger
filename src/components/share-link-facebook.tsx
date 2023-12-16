// SPDX-FileCopyrightText: 2023 Diego Elio Pettenò
//
// SPDX-License-Identifier: MIT

import { ShareGeneratorProps } from "@/lib/share-link-api";
import ShareLink from "./share-link";

type ShareLinkFacebookProps = ShareGeneratorProps;

const ShareLinkFacebook = ({ url }: ShareLinkFacebookProps) => {

    var shareUrl = '';
    if (url) {
        var fbSharerUrl = new URL("https://www.facebook.com/sharer/sharer.php");
        fbSharerUrl.searchParams.set('u', url);
        shareUrl = fbSharerUrl.toString();
    }

    return (
        <ShareLink url={shareUrl} />
    )
}

export default ShareLinkFacebook;
