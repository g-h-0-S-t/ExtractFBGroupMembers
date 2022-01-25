javascript:
    (function(window) {
        var tab = window.open('about:blank', '_blank');
        tab.document.write('<style>*{background:#000;color:#f0f0f0;font-family:"Gill Sans", sans-serif;text-align: center;margin:20px auto;} a{color:#c3015c;}</style><h1>Group Name : ' + window.document.querySelectorAll('a[href*="/groups/"]')[2].text + '</h1><hr><h2>Group Members (Total : ', window.document.querySelectorAll('a[href*="/groups/"][href*="/user/"]').length + ')</h2><hr>');
        tab.document.write('<table border="1" cellspacing="0" cellpadding="10"><thead><tr><th>Serial Number</th><th>Link to Profile</th></tr></thead><tbody>');
        window.document.querySelectorAll('a[href*="/groups/"][href*="/user/"]').forEach(function(v, i, a) {
            //console.log(document.querySelectorAll('a[href*="/groups/"]')[2].text + ' : ' + (i + 1) + ' -> ' + v.href);
            //console.log('Total : ', document.querySelectorAll('a[href*="/groups/"][href*="/user/"]').length);
            tab.document.write('<tr><td>' + (i + 1) + '</td><td><a href =">' + v.href + '">' + v.href + '</a></td></tr>');
        });
        tab.document.write('</tbody></table>');
        tab.document.close();
    })(window);
