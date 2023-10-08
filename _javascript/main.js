// SPDX-FileCopyrightText: 2023 Diego Elio Pettenò
//
// SPDX-License-Identifier: MIT

function inputChanged() {
  let input = document.getElementById("inputUrl");

  try {
    let inputURL = new URL(input.value);

    inputURL.searchParams.set("mtm_campaign", "social");

    let allInputURLs = document.getElementsByClassName("tagger-social-urls");

    Array.prototype.forEach.call(allInputURLs, element => {
      updateURL(inputURL, element);
    });
  } catch (err) {
    // ignore errors if the input is not a valid URL.
    return;
  }
}

function updateURL(inputURL, socialElement) {
  inputURL.searchParams.set("mtm_kwd", socialElement.getAttribute("data-mtm-kwd"));

  socialElement.value = inputURL.href;
}

function copyURL(urlId) {
  let urlInput = document.getElementById(urlId);

  urlInput.select();
  urlInput.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(urlInput.value);
}

window.addEventListener('load', async () => {
  let inputUrl = document.getElementById('inputUrl');

  ['change', 'keyup', 'paste'].forEach(event => {
    inputUrl.addEventListener(event, inputChanged);
  });

  const urlParams = new URLSearchParams(window.location.search);
  inputUrl.value = urlParams.get('url');
  // trigger the change event, which is otherwise not triggered.
  inputChanged();

  let allUrls = document.getElementsByClassName("tagger-copy-urls");

  Array.prototype.forEach.call(allUrls, element => {
    element.addEventListener('click', () => { copyURL(element.getAttribute('data-url-element')) });
  });

  if ('serviceWorker' in navigator) {
    try {
      let reg = await navigator.serviceWorker.register('/lib/service-worker.js');
      console.log('Service worker registered! 😎', reg);
    } catch (err) {
      console.log('😥 Service worker registration failed: ', err);
    }
  }
});
