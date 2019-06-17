---
title: "HTTPS"
date: 2017-12-05
categories:
    - technology 
---

I haven't changed much about this website since I [migrated to Jekyll](https://jasonheppler.org/2011/04/19/migrating-to-jekyll/) in 2011. I've flirted here and there with Hugo, but don't really have solid plans
to fully convert over to it just yet. But I do feel that the standard on the
web should be HTTPS, so I'm stepping away from my self-hosted site on Reclaim
Hosting and moving over to [Netlify](https://www.netlify.com/). Netlify supports the same
commit-and-publish workflow that Github pages does, but, more importantly,
comes with [Let's Encrypt](https://letsencrypt.org/) to provide SSL on custom domains.

I've taken some steps to clean up a few links across the site:

```{console}
sed -i 's|http://jasonheppler.org|https://jasonheppler.org|g' *.md
```

That said, there might be some broken links yet -- if you discover any, it'd be swell if you'd let me know!
