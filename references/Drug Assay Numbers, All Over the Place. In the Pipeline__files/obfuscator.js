// Random encryption key feature by Andrew Moulden, Site Engineering Ltd
// This code is freeware provided these four comment lines remain intact
// A wizard to generate this code is at http://www.jottings.com/obfuscator/

var __MTTBLINK__;
var __MTTBID__;
function obfuscator(coded, key, mode, path, hidden) {
	shift = coded.length;
	link = "";
	
	for(i=0;i<coded.length;i++) {
		if (key.indexOf(coded.charAt(i))==-1) {
			ltr = coded.charAt(i);link+=(ltr);
		} else {
			ltr = (key.indexOf(coded.charAt(i)) - shift + key.length) % key.length;
			link += (key.charAt(ltr));
		}
	}
	if(mode == 'hidden_input') {
		document.write('<input type="hidden" name="CCode" value="' + link + '" />');
	} else if(mode == '__MTTBLINK__') {
		__MTTBLINK__ = path + link;
		if(hidden) return;
		document.write(link);
	} else if(mode == '__MTTBID__') {
		__MTTBID__ = link;
		if(hidden) return;
		document.write(link);
	}
}
