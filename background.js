chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        "id": "searchInNewTab",
        "title": "このユーザからのツイートを除外",
        "type": "normal",
        "contexts": [
            "link"
        ],
        "documentUrlPatterns": [
            "https://twitter.com/search?*"
        ],
        "targetUrlPatterns": [
            "https://twitter.com/*"
        ]
    });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "searchInNewTab") {
        const TWITTER_SEAECH_PAGE = /^https:\/\/twitter\.com\/search\?(.*?&|)q=([^&\n]+)(.*?)$/;
        const TWITTER_USER_PAGE = /^https:\/\/twitter\.com\/([a-zA-Z0-9_-]+)(\/status\/.+)?$/;
        const search_url_match = info.pageUrl.match(TWITTER_SEAECH_PAGE);
        const screen_name_match = info.linkUrl.match(TWITTER_USER_PAGE);
        if (search_url_match !== null && screen_name_match !== null) {
            chrome.tabs.create({
                url: "https://twitter.com/search?" + search_url_match[1] + "q=" + search_url_match[2] + "%20-from%3A" + screen_name_match[1] + search_url_match[3]
            });
        }
    }
});