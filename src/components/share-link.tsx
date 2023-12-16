// SPDX-FileCopyrightText: 2023 Diego Elio Pettenò
//
// SPDX-License-Identifier: MIT

import Icon from '@mdi/react';
import { mdiShare } from '@mdi/js';


type ShareLinkProps = {
    url: string;
}

const ShareLink = ({ url }: ShareLinkProps) => {
    return (
        <div className="control">
            <a href={url} target="_blank">
                <button className="button" disabled={!url}>
                    <span className="icon is-small">
                        <Icon path={mdiShare} />
                    </span>
                </button>
            </a>
        </div>
    )
}

export default ShareLink;
