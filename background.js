const adUrls = [
    "*://www.youtube.com/get_video_info*adformat*",
    "*://www.youtube.com/api/stats/ads*",
    "*://www.youtube.com/youtubei/v1/ads*",
    "*://googleads.g.doubleclick.net/*"
  ];
  
  chrome.declarativeNetRequest.updateDynamicRules({
    addRules: adUrls.map((url, id) => ({
      id: id + 1,
      priority: 1,
      action: { type: "block" },
      condition: { urlFilter: url }
    })),
    removeRuleIds: Array.from({ length: adUrls.length }, (_, i) => i + 1)
  });
  