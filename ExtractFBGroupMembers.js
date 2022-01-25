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
