// ==UserScript==
// @name         Yahoo FF Waiver Priority Drag and Drop
// @namespace    https://github.com/itorrey/userscripts
// @version      0.1
// @description  Sort Yahoo waiver priority using DnD
// @downloadURL  https://github.com/itorrey/userscripts/raw/master/waiverDnd/Yahoo%20FF%20Waiver%20Priority%20Drag%20and%20Drop.user.js
// @author       Torrey Rice
// @match        http://football.fantasysports.yahoo.com/*
// @grant        GM_addStyle
// ==/UserScript==

// Create sample data if there are no waivers.
var testData = '<tr class="first odd yui3-dd-drop" id="yui_3_10_3_2_1416453575598_109"> <td class="priority"> <div class="Selectbox Input-xs"> <select name="2_8565_7505"> <option value="1" selected>&nbsp;1</option> <option value="2">&nbsp;2</option> <option value="3">&nbsp;3</option> <option value="4">&nbsp;4</option> </select> </div> </td> <td>Nov 21</td> <td>Josh Gordon</td> <td>John David Booty</td> </tr> <tr class="last even yui3-dd-drop" id="yui_3_10_3_2_1416453575598_115"> <td class="priority"> <div class="Selectbox Input-xs"> <select name="2_25712_7505"> <option value="1">&nbsp;1</option> <option value="2" selected>&nbsp;2</option> <option value="3">&nbsp;3</option> <option value="4">&nbsp;4</option> </select> </div> </td> <td id="yui_3_10_3_2_1416453575598_141">Nov 21</td> <td>Hash Gordon</td> <td>Mike Cofer</td> </tr> <tr class="first odd yui3-dd-drop" id="yui_3_10_3_2_1416453575598_109"> <td class="priority"> <div class="Selectbox Input-xs"> <select name="2_8565_7505"> <option value="1">&nbsp;1</option> <option value="2">&nbsp;2</option> <option value="3" selected>&nbsp;3</option> <option value="4">&nbsp;4</option> </select> </div> </td> <td>Nov 21</td> <td>Josh Gordon</td> <td>Ricky Waters</td> </tr> <tr class="last even yui3-dd-drop" id="yui_3_10_3_2_1416453575598_115"> <td class="priority"> <div class="Selectbox Input-xs"> <select name="2_25712_7505"> <option value="1">&nbsp;1</option> <option value="2">&nbsp;2</option> <option value="3">&nbsp;3</option> <option value="4" selected>&nbsp;4</option> </select> </div> </td> <td id="yui_3_10_3_2_1416453575598_141">Nov 21</td> <td>Hash Gordon</td> <td>Charlie Garner</td> </tr>';
GM_addStyle(".Table tbody tr { cursor: move; transition:background 0.4s;} .Table tbody tr:hover { background:rgba(0,0,0,0.4); } .Table tbody .yui3-dd-drop-active-valid { background:rgba(73, 79, 54, 0.35);} .yui3-dd-dragging { background:rgba(81, 123, 23, 0.2); } .Table tbody tr td:nth-child(2) { width:107px; } .Table tbody tr td:nth-child(3) { width:169px; } td.priority { width:165px; } ");

YUI().use('sortable', 'selector-css3', function (Y) {

    var waiverNodes = Y.all('.Table tbody tr');
     if(!waiverNodes._nodes.length) {
		Y.one('.Table tbody').append(testData);
     }

	var sortable = new Y.Sortable({
		container: '.Table tbody',
		nodes: 'tr',
		opacity: '0'
	});

    sortable.delegate.after('drag:end', function (e) {
        var selectNodes = Y.all('.Table tbody tr select');
		var optionNodes = Y.all('.Table tbody tr select option[selected]').removeAttribute("selected");;

        selectNodes.each(function(node, index) {
           var opt = node._node.children[index];
           opt.setAttribute("selected", "true");
           node.set("selectedIndex", index);
        });
    });
});