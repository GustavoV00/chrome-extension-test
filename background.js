async function getCurrentTab() {
  let queryOptions = { active: true, lastFocusedWindow: true };
  // `tab` will either be a `tabs.Tab` instance or `undefined`.
  let [tab] = await chrome.tabs.query(queryOptions);
  console.log(tab)
  return tab;
}

function callback(data) {
  console.log(data)
}


const main = async () => {
  chrome.tabs.create({ url: "https://google.com" }, callback);
  console.log("Starting extension")
  const tab = getCurrentTab()
  console.log(tab)
}

main()
