// SPDX-FileCopyrightText: 2023 Diego Elio Pettenò
// 
// SPDX-License-Identifier: MIT
/** @type {import('next').NextConfig} */

const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

const withPWA = require('next-pwa')({
    dest: 'public'
})

const prodConfig = {
    output: 'export',
    trailingSlash: true,
}

const devConfig = {
}

module.exports = (phase, { defaultConfig }) => {
    return withPWA(
        phase == PHASE_DEVELOPMENT_SERVER ? devConfig : prodConfig
    );
}
