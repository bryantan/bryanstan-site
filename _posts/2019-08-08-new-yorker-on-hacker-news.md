---
layout: article
title: New Yorker on Hacker News
filename: new-yorker-on-hacker-news
articlename: The Lonely Work of Moderating Hacker News
articlelink: https://www.newyorker.com/news/letter-from-silicon-valley/the-lonely-work-of-moderating-hacker-news
date: 2019-08-08
tags: [reading]
---

{% assign text = site.texts
    | where_exp:"text", "text.filename == page.filename" 
    | first %}

{{ text.content }}
