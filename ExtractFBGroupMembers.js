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
    /** new tab, row count */
    var tab = window.open('about:blank', '_blank'),
        count = 0;

    /** backup FB DOM into the new window. Will be using this for generating the report */
    tab.document.write('<div id = "roughWork">' + window.document.body.outerHTML + '</div>');

    /** report theme */
    tab.document.write(`
    <style>
    * {
        background-color: #0a0a0a;
        color: #f0f0f0;
        font-family: "Gill Sans", sans-serif;
        text-align: center;
        margin: 0px auto;
    }
    a {
        color:#c3015c;
    }
    </style>
    `);

    /** dev link */
    tab.document.write('<h1>Facebook Group Members\' Profile Extractor by <a target = "_blank" href = "https://github.com/g-h-0-S-t">gh0$t</a>');
    tab.document.write('<br>');

    /** tool link */
    tab.document.write('Get the tool <a target = "_blank" href = "https://github.com/g-h-0-S-t/ExtractFBGroupMembers">here</a>');
    tab.document.write('<hr>');

    /** report header : group name */
    tab.document.write('Group Name : <a target = "_blank" href = "' + window.location.href + '">' + tab.document.querySelectorAll('#roughWork a[href*="/groups/"]')[2].text + '</a></h1>');

    /** report header : total group members visible to the tool when run */
    tab.document.write('<h2 id="action">Group Members (Total : <span id = "count"></span>)</h2><hr>');

    /** report table */
    tab.document.write('<table id = "theList" border="1" cellspacing="0" cellpadding="10">');

    /** report table header */
    tab.document.write('<thead><tr><th>Serial Number</th><th>Profile Picture</th><th>Profile Name</th><th>Profile Details</th><th>Profile URL</th></tr></thead>');

    /** report table body */
    tab.document.write('<tbody>');
    tab.document.querySelectorAll('#roughWork [class="ow4ym5g4 auili1gw rq0escxv j83agx80 buofh1pr g5gj957u i1fnvgqd oygrvhab cxmmr5t8 hcukyx3x kvgmc6g5 hpfvmrgz qt6c0cv9 jb3vyjys l9j0dhe7 du4w35lb bp9cbjyn btwxx1t3 dflh9lhu scb9dxdr nnctdnn4"]').forEach(function(v, i, a) {

        /** don't entertain data having text 'invited' or = 'group name' */
        if (!v.textContent.toLowerCase().includes('invited') &&
            v.textContent !== tab.document.querySelectorAll('#roughWork a[href*="/groups/"]')[2].text &&
            v.querySelector('a') && !tab.document.getElementById('theList').innerHTML.includes(v.querySelector('a').href)) {

            count += 1;
            tab.document.write('<tr>');

            /** Serial Number */
            tab.document.write('<td>' + count + '</td>');

            /** Profile Picture */
            tab.document.write('<td><img height = "38" width = "38" src = "' + v.querySelector('image').getAttribute('xlink:href') + '"/></td>');

            /** Profile Name */
            tab.document.write('<td><a target = "_blank" href ="' + v.querySelector('a').href + '">' + v.querySelector('[class = "j83agx80 cbu4d94t ew0dbk1b irj2b8pg"] > [class = "qzhwtbm6 knvmm38d"]:nth-child(1)').textContent + '</a></td>');

            /** Profile Details */
            tab.document.write('<td>');

            /** Profile Details - Line 1 */
            tab.document.write('<a target = "_blank" href ="' + v.querySelector('a').href + '">' + v.querySelector('[class = "j83agx80 cbu4d94t ew0dbk1b irj2b8pg"] > [class = "qzhwtbm6 knvmm38d"]:nth-child(2)').textContent);
            tab.document.write('<br>');

            /** Profile Details - Line 2 */
            tab.document.write(v.querySelector('[class = "j83agx80 cbu4d94t ew0dbk1b irj2b8pg"] > [class = "qzhwtbm6 knvmm38d"]:nth-child(3)').textContent + '</a>');
            tab.document.write('</td>');

            /** Profile URL */
            tab.document.write('<td><a target = "_blank" href ="' + v.querySelector('a').href + '">' + v.querySelector('a').href + '</a></td>');
            tab.document.write('</tr>');

        }
    });
    tab.document.write('</tbody></table>');

    /** total group members */
    tab.document.getElementById('count').innerHTML = count;

    /** Download Link */
    tab.document.getElementById('action').innerHTML +=
        '<br><a download="' +
        tab.document.querySelectorAll('#roughWork a[href*="/groups/"]')[2].text +
        '.html' +
        '" href = "data:text/html;base64,' +
        btoa(unescape(encodeURIComponent(tab.document.documentElement.innerHTML))) +
        '">Download this List</a>';

    /** remove the backup DOM */
    tab.document.getElementById('roughWork').innerHTML = '';

    tab.document.close();
})(window);
