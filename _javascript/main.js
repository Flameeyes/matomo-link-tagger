// SPDX-FileCopyrightText: 2023 Diego Elio Pettenò
//
// SPDX-License-Identifier: MIT

export function inputChanged() {
  let input = document.getElementById("inputUrl");

  let inputURL = new URL(input.value);
  inputURL.searchParams.set("mtm_campaign", "social");

  let allInputURLs = document.getElementsByClassName("tagger-social-urls");

  Array.prototype.forEach.call(allInputURLs, element => {
    updateURL(inputURL, element);
  });
}

function updateURL(inputURL, socialElement) {
  inputURL.searchParams.set("mtm_kwd", socialElement.getAttribute("data-mtm-kwd"));

  socialElement.value = inputURL.href;
}

export function copyURL(urlId) {
  let urlInput = document.getElementById(urlId);

  urlInput.select();
  urlInput.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(urlInput.value);
}
