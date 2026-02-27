{{- $exclude_short_posts := not $.Site.Params.surprise_me_include_short_posts -}}
{{- $exclude_long_posts := not $.Site.Params.surprise_me_include_long_posts -}}
{{- $posts := where .Site.Pages "Type" "post" -}}

{{- if $exclude_short_posts -}}
  {{- $posts = where $posts "Title" "!=" "" -}}
{{- end -}}

{{- if $exclude_long_posts -}}
  {{- $posts = where $posts "Title" "==" "" -}}
{{- end -}}

{{- $permalinks := slice -}}

{{- range $posts -}}
  {{- $permalinks = append .Permalink $permalinks -}}
{{- end -}}

const posts = {{ $permalinks | jsonify }};

self.addEventListener('fetch', (event) => {
  if (event.request.method !== "GET") return;

  const url = new URL(event.request.url);

  if (url.pathname.match(/^\/surprise-me\/?$/)) {
    const randomPost = posts[Math.floor(Math.random() * posts.length)];

    event.respondWith(Response.redirect(randomPost, 302));
  }
});
