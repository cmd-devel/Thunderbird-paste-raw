const paste = async (tab, _) => {
    let text = await navigator.clipboard.readText();
    let details = await browser.compose.getComposeDetails(tab.id);
    
    if (!details.isPlainText) {
        browser.tabs.executeScript(tab.id, {code : 'alert("Not in plain text mode");'});
        return;
    }

    await browser.compose.setComposeDetails(tab.id, { plainTextBody: text });
};

// Initialization
messenger.composeAction.onClicked.addListener(paste);
