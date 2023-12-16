// SPDX-FileCopyrightText: 2023 Diego Elio Pettenò
//
// SPDX-License-Identifier: MIT

'use client'

import { useState, useEffect, useRef } from "react";

type TaggedLinkFieldProps = {
    name: string;
    keyword: string;
    value?: string;
    contentId?: string;
}

const TaggedLinkField = ({ name, keyword, value, contentId }: TaggedLinkFieldProps) => {
    const inputRef = useRef<HTMLInputElement>(null);

    function generateTaggedURL(inputUrl: string | undefined): string {
        if (inputUrl == undefined) {
            return '';
        }
        try {
            var url = new URL(inputUrl);
            url.searchParams.set("mtm_campaign", "social");
            url.searchParams.set("mtm_kwd", keyword);
            if (contentId) {
                url.searchParams.set("mtm_cid", contentId);
            } else {
                url.searchParams.delete("mtm_cid");
            }

            return url.toString();
        } catch (_) {
            return '';
        }
    };

    const placeholderUrl = generateTaggedURL("https://flameeyes.blog/");
    const taggedUrl = generateTaggedURL(value);

    function copyToClipboard(_e: any) {
        // Don't reset the clipboard if nothing was generated.
        if (taggedUrl != '') {
            if (inputRef.current != undefined) {
                inputRef.current.select();
                inputRef.current.setSelectionRange(0, 99999);
            }
            navigator.clipboard.writeText(taggedUrl);
        }
    }

    return (
        <div className="field has-addons has-addons-centered" onClick={copyToClipboard}>
            <div className="control">
                <a className="button tagger-copy-urls">
                    {name}
                </a>
            </div>
            <div className="control is-expanded">
                <input
                    ref={inputRef}
                    readOnly={true}
                    className="input tagger-social-urls"
                    type="text"
                    placeholder={placeholderUrl}
                    value={taggedUrl} />
            </div>
        </div>
    );
};

export default TaggedLinkField;
