---
layout: post
title: September Scotland
filename: september-scotland
date: 2019-09-26
tags: [places]
---

{% assign text = site.texts
    | where_exp:"text", "text.filename == page.filename" 
    | first %}

{{ text.content }}
