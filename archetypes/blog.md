---
title: "{{ getenv "BLOG_TITLE" }}"
date: "{{ .Date  }}"
slug: "{{ slicestr .Name 11  }}"
draft: true
# newsletter: true
# tags:
# - 
# external: ""
---