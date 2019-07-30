---
layout: post
title: Taipei, a City of Rain
filename: taipei-city-of-rain
date: 2019-07-30
tags: [places]
---

{% assign text = site.texts
    | where_exp:"text", "text.filename == page.filename" 
    | first %}

{{ text.content }}
