/*
 * Needs to use "tabs" permission in manifest, because i'm accessing the
 * attribute "title" in chrome.tabs api.
 */

async function sendTabsDataToServer(tabTitles) {
  const host = "http://localhost:5000/tabs";
  const data = JSON.stringify(tabTitles);

  try {
    await fetch(host, {
      method: "POST",
      body: data,
      headers: {
        "Content-type": "application/json",
      },
    });
  } catch (error) {
    console.log(error);
  }
}

async function getAllTabs() {
  let queryOptions = { active: true, lastFocusedWindow: true };
  let tabs = await chrome.tabs.query(queryOptions);
  // console.log(tabs[0].title);
  sendTabsDataToServer(tabs[0].title);
}

chrome.runtime.onInstalled.addListener(async () => {
  chrome.tabs.onActivated.addListener(getAllTabs);
  // Ele considera este evento para cada iframe na página.
  // Podendo rodar n iFrames.
  chrome.tabs.onUpdated.addListener(getAllTabs);
});
