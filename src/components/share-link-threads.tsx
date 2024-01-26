// SPDX-FileCopyrightText: 2023 Diego Elio Pettenò
//
// SPDX-License-Identifier: MIT

import { ShareGeneratorProps } from "@/lib/share-link-api";
import ShareLink from "./share-link";

type ShareLinkThreadsProps = ShareGeneratorProps;

const ShareLinkThreads = ({ url }: ShareLinkThreadsProps) => {

    var shareUrl = '';
    if (url) {
        var fbSharerUrl = new URL("https://www.threads.net/intent/post");
        fbSharerUrl.searchParams.set('text', url);
        shareUrl = fbSharerUrl.toString();
    }

    return (
        <ShareLink url={shareUrl} />
    )
}

export default ShareLinkThreads;
