javascript:
    /** MIT License
     * 
     * Copyright (c) 2022 gh0$t
     * 
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     * 
     * The above copyright notice and this permission notice shall be included in all
     * copies or substantial portions of the Software.
     * 
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
     * SOFTWARE.*/
    'use strict';
(function(window) {
    var tab = window.open('about:blank', '_blank');
    var count = 0;
    tab.document.write('<style>*{background:#000;color:#f0f0f0;font-family:"Gill Sans", sans-serif;text-align: center;margin:0px auto;} a{color:#c3015c;}</style><h1>Facebook Group Members\' Profile Extractor by <a target = "_blank" href = "https://github.com/g-h-0-S-t">gh0$t</a><br>Group Name : <a target = "_blank" href = "' + window.location.href + '">' + window.document.querySelectorAll('a[href*="/groups/"]')[2].text + '</a></h1><hr><h2 id="action">Group Members (Total : <span id = "count"></span>)</h2><hr>');
    tab.document.write('<table id = "theList" border="1" cellspacing="0" cellpadding="10"><thead><tr><th>Serial Number</th><th>Profile Picture</th><th>Profile Name</th><th>Profile Details</th><th>Profile URL</th></tr></thead><tbody>');
    window.document.querySelectorAll('a[href*="/groups/"][href*="/user/"]').forEach(function(v, i, a) {
        if (!tab.document.getElementById('theList').innerHTML.includes(v.href)) {
            if (!v.text && v.querySelector('image')) {
                count += 1;
                tab.document.write('<tr>');
                tab.document.write('<td>' + count + '</td><td><img height = "38" width = "38" src = "' + v.querySelector('image').getAttribute('xlink:href') + '"/></td>');
            }
            if (v.text) {
                try {
                    tab.document.write('<td><a target = "_blank" href ="' + v.href + '">' + v.text + '</a></td><td><a target = "_blank" href ="' + v.href + '">' + v.closest('.qzhwtbm6.knvmm38d').nextSibling.textContent + '<br>' + v.closest('.qzhwtbm6.knvmm38d').nextSibling.nextSibling.textContent + '</a></td><td><a target = "_blank" href ="' + v.href + '">' + v.href + '</a></td>');
                } catch { /** meh, whatever */ }
                tab.document.write('</tr>');
            }
        }
    });
    tab.document.write('</tbody></table>');
    tab.document.getElementById('count').innerHTML = count;
    tab.document.getElementById('action').innerHTML += '<br><a download="' + window.document.querySelectorAll('a[href*="/groups/"]')[2].text + '.html' + '" href = "data:text/html;base64,' + btoa(unescape(encodeURIComponent(tab.document.documentElement.innerHTML))) + '">Download this List</a>';
    tab.document.close();
})(window);
