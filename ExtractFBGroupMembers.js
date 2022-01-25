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
    tab.document.write('<style>*{background-color:#0a0a0a;color:#f0f0f0;font-family:"Gill Sans", sans-serif;text-align: center;margin:0px auto;} a{color:#c3015c;}</style><h1>Facebook Group Members\' Profile Extractor by <a target = "_blank" href = "https://github.com/g-h-0-S-t">gh0$t</a><br>Get the tool <a target = "_blank" href = "https://github.com/g-h-0-S-t/ExtractFBGroupMembers">here</a><hr>Group Name : <a target = "_blank" href = "' + window.location.href + '">' + window.document.querySelectorAll('a[href*="/groups/"]')[2].text + '</a></h1><h2 id="action">Group Members (Total : <span id = "count"></span>)</h2><hr><table id = "theList" border="1" cellspacing="0" cellpadding="10"><thead><tr><th>Serial Number</th><th>Profile Picture</th><th>Profile Name</th><th>Profile Details</th><th>Profile URL</th></tr></thead><tbody>');
    window.document.querySelectorAll('[class="ow4ym5g4 auili1gw rq0escxv j83agx80 buofh1pr g5gj957u i1fnvgqd oygrvhab cxmmr5t8 hcukyx3x kvgmc6g5 hpfvmrgz qt6c0cv9 jb3vyjys l9j0dhe7 du4w35lb bp9cbjyn btwxx1t3 dflh9lhu scb9dxdr nnctdnn4"]').forEach(function(v, i, a) {
        if (!v.textContent.toLowerCase().includes('invited') && v.textContent !== window.document.querySelectorAll('a[href*="/groups/"]')[2].text && !tab.document.getElementById('theList').innerHTML.includes(v.querySelector('a').href)) {
            count += 1;
            tab.document.write('<tr><td>' + count + '</td><td><img height = "38" width = "38" src = "' + v.querySelector('image').getAttribute('xlink:href') + '"/></td><td><a target = "_blank" href ="' + v.querySelector('a').href + '">' + v.querySelector('[class = "j83agx80 cbu4d94t ew0dbk1b irj2b8pg"] > [class = "qzhwtbm6 knvmm38d"]:nth-child(1)').textContent + '</a></td><td><a target = "_blank" href ="' + v.querySelector('a').href + '">' + v.querySelector('[class = "j83agx80 cbu4d94t ew0dbk1b irj2b8pg"] > [class = "qzhwtbm6 knvmm38d"]:nth-child(2)').textContent + '<br>' + v.querySelector('[class = "j83agx80 cbu4d94t ew0dbk1b irj2b8pg"] > [class = "qzhwtbm6 knvmm38d"]:nth-child(3)').textContent + '</a></td><td><a target = "_blank" href ="' + v.querySelector('a').href + '">' + v.querySelector('a').href + '</a></td></tr>');
        }
    });
    tab.document.write('</tbody></table>');
    tab.document.getElementById('count').innerHTML = count;
    tab.document.getElementById('action').innerHTML += '<br><a download="' + window.document.querySelectorAll('a[href*="/groups/"]')[2].text + '.html' + '" href = "data:text/html;base64,' + btoa(unescape(encodeURIComponent(tab.document.documentElement.innerHTML))) + '">Download this List</a>';
    tab.document.close();
})(window);
