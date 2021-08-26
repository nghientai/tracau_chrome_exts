let color = 'green';

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({color});
    // Create context menu
    chrome.contextMenus.create({
        "title": "Search on tracau.vn",
        "contexts": ["selection","page"],
        "id": "tracauContextMenuId"
    })
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    console.log(info, tab);
    // Open the page up.
    chrome.tabs.create({ url: 'https://tracau.vn/?s=' + info.selectionText });
})
