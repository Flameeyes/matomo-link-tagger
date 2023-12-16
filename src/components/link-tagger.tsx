// SPDX-FileCopyrightText: 2023 Diego Elio Pettenò
//
// SPDX-License-Identifier: MIT

'use client'

import { useState } from 'react';
import { useSearchParams } from 'next/navigation'
import TaggedLinkField from '@/components/tagged-link-field'

export default function LinkTagger() {
    const searchParams = useSearchParams()
    const searchInputUrl = searchParams.get('url') || searchParams.get('text') || searchParams.get('body') || '';

    const [inputUrl, setInputUrl] = useState(searchInputUrl);

    function handleInputUrlChange(e: React.ChangeEvent<HTMLInputElement>) {
        setInputUrl(e.target.value);
    }

    return (
        <div className="content">
            <div className="field">
                <div className="control is-expanded">
                    <input type="text" className="input" placeholder="https://flameeyes.blog/" value={inputUrl} onChange={(evt) => handleInputUrlChange(evt)} />
                </div>
            </div>

            <TaggedLinkField name="Mastodon" keyword="mastodon" value={inputUrl} />
            <TaggedLinkField name="Threads" keyword="threads" value={inputUrl} />
            <TaggedLinkField name="Bluesky" keyword="bluesky" value={inputUrl} />
            <TaggedLinkField name="LinkedIn" keyword="linkedin" value={inputUrl} />
            <TaggedLinkField name="Facebook" keyword="facebook" value={inputUrl} />
            <TaggedLinkField name="WhatsApp Channel" keyword="whatsapp" contentId="channel" value={inputUrl} />
            <TaggedLinkField name="Reddit" keyword="reddit" value={inputUrl} />
            <TaggedLinkField name="Stackoverflow" keyword="stackoverflow" value={inputUrl} />
        </div>

    )
}
