chrome.runtime.onInstalled.addListener(() => {
  chrome.action.setBadgeText({
    text: 'OFF',
  });
});

const url = 'https://proximal.unicarioca.edu.br/portal/egresso/';

chrome.action.onClicked.addListener(async (tab) => {
  if (tab.url.startsWith(url)) {
    const prevState = await chrome.action.getBadgeText({ tabId: tab.id });
    const nextState = prevState === 'ON' ? 'OFF' : 'ON';

    await chrome.action.setBadgeText({
      tabId: tab.id,
      text: nextState,
    });

    if (nextState === 'ON') {
      await chrome.scripting
        .executeScript({
          target: { tabId: tab.id },
          files: [
            './src/main.js',
           
          ],
        })
        .then(() => console.log('script injected'));
    } else if (nextState === 'OFF') {
      await chrome.scripting
        .executeScript({
          target: { tabId: tab.id },
          files: ['./off/off.js'],
        })
        .then(() => console.log('script injected'));
    }
  }
});
