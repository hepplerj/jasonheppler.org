// The following script indexes the outgoing links in all the 
// markdown files in the content/blog directory.
// It creates a file called indexlinks.json in the same directory.

const fs = require('fs');
const path = require('path');
const glob = require('glob');
const markdown = require('markdown').markdown;

const index = {};

glob.sync('content/blog/*.md').forEach(file => {
    const text = fs.readFileSync(file, 'utf8');
    const html = markdown.toHTML(text);
    const links = html.match(/href="([^"]+)"/g);
    if (links) {
        links.forEach(link => {
        const url = link.match(/href="([^"]+)"/)[1];
        if (!index[url]) index[url] = [];
        index[url].push(path.basename(file));
        });
    }
    }
);

fs.writeFileSync('indexlinks.json', JSON.stringify(index, null, 2));

// We also create a file that counts the number of hostnames in the index.
const hosts = {};
Object.keys(index).forEach(url => {
    // if the url isn't formatted as a link, skip it
    if (!url.match(/^https?:\/\//)) return;
    const host = url.match(/^https?:\/\/([^/]+)/)[1];
    if (!hosts[host]) hosts[host] = 0;
    hosts[host]++;

    // sort the hosts by number of links
    const sorted = Object.keys(hosts).sort((a, b) => hosts[b] - hosts[a]);
    const output = sorted.map(host => `${host}: ${hosts[host]}`).join('\n');
    fs.writeFileSync('indexhosts.txt', output);
});