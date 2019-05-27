res.render er den der læser .ejs filen
parameteret til res.render er fil navnet

<%- include('partials/styles.ejs') %>

<p><%= typeof footer != "undefined" ? footer: "!!!!!"; %></p>