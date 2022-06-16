/*
* Needs to use "tabs" permission in manifest, because i'm accessing the 
* attribute "title" in chrome.tabs api.
*/


async function sendTabsDataToServer(tabsTitles) {
  const host = "http://172.20.27.5:8080/tabs"
  const data = JSON.stringify(tabsTitles)

  try {
    await fetch(host, {
      method: "POST",
      body: data,
      headers: {
        "Content-type": "application/json",
      }
    })
  } catch (error) {
    console.log(error)
  }

}

async function getAllTabsTitles(tabs) {
  const titles = tabs.map((item) => item.title)
  return titles
}

async function getAllTabs() {
  // If need to pass some args
  let queryOptions = {};
  const tabs = await chrome.tabs.query(queryOptions)
  return tabs
}

// Like a main function
chrome.runtime.onInstalled.addListener(async () => {
  setInterval(async () => {
    console.log("Requisição enviada")
    const tabs = await getAllTabs()
    const tabsTitles = await getAllTabsTitles(tabs)
    sendTabsDataToServer(tabsTitles)

  }, 5000)
});
