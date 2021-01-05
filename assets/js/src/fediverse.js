{{ with .Params.comments }}
<div class="article-content">
  <h2>Comments</h2>
  <p>You can use your Mastodon account to reply to this <a class="link" href="https://{{ .host }}/@{{ .username }}/{{ .id }}">post</a>.</p>
  <p><a class="button" href="https://{{ .host }}/interact/{{ .id }}?type=reply">Reply</a></p>
  <p id="fediverse-comments-list"><button id="load-comment">Load comments</button></p>
  <noscript><p>You need JavaScript to view the comments.</p></noscript>
  <script src="/assets/js/purify.min.js"></script>
  <script type="text/javascript">
    function escapeHtml(unsafe) {
      return unsafe
           .replace(/&/g, "&amp;")
           .replace(/</g, "&lt;")
           .replace(/>/g, "&gt;")
           .replace(/"/g, "&quot;")
           .replace(/'/g, "&#039;");
   }

    document.getElementById("load-comment").addEventListener("click", function() {
      document.getElementById("load-comment").innerHTML = "Loading";
      fetch('https://{{ .host }}/api/v1/statuses/{{ .id }}/context')
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          if(data['descendants'] &&
             Array.isArray(data['descendants']) && 
            data['descendants'].length > 0) {
              document.getElementById('fediverse-comments-list').innerHTML = "";
              data['descendants'].forEach(function(reply) {
                reply.account.display_name = escapeHtml(reply.account.display_name);
                reply.account.emojis.forEach(emoji => {
                  reply.account.display_name = reply.account.display_name.replace(`:${emoji.shortcode}:`,
                    `<img src="${escapeHtml(emoji.static_url)}" alt="Emoji ${emoji.shortcode}" height="20" width="20" />`);
                });
                fediverseComment =
                  `<div class="fediverse-comment">
                     <div class="avatar">
                       <img src="${escapeHtml(reply.account.avatar_static)}" height=60 width=60 alt="">
                     </div>
                     <div class="content">
                       <div class="author">
                         <a href="${reply.account.url}" rel="nofollow">
                           <span>${reply.account.display_name}</span>
                           <span class="disabled">${escapeHtml(reply.account.acct)}</span>
                         </a>
                         <a class="date" href="${reply.uri}" rel="nofollow">
                           ${reply.created_at.substr(0, 10)}
                         </a>
                       </div>
                       <div class="fediverse-comment-content">${reply.content}</div> 
                     </div>
                   </div>`;
                document.getElementById('fediverse-comments-list').appendChild(DOMPurify.sanitize(fediverseComment, {'RETURN_DOM_FRAGMENT': true}));
              });
          } else {
            document.getElementById('fediverse-comments-list').innerHTML = "<p>Not comments found</p>";
          }
        });
      });
  </script>
</div>
{{ end }}
