// SPDX-FileCopyrightText: 2023 Diego Elio Pettenò
//
// SPDX-License-Identifier: MIT

import LinkTagger from "@/components/link-tagger";
import { Suspense } from "react";

export default function Home() {
  return (
    <section className="section">
      <div className="container">
        <Suspense>
          <LinkTagger />
        </Suspense>
      </div>
    </section>
  )
}
