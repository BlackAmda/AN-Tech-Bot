/* Copyright (C) 2021 Vai838.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
WhatsAsenaDuplicated
*/

const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const got = require('got');

const Language = require('../language');
const Lang = Language.getString('weather');


Asena.addCommand({pattern: 'issnow ?(.*)', fromMe: false, desc: "Provides the current location of iss" }, async (message, match) => {
	if (match[1] === 'xx') return await message.reply(Lang.NEED_LOCATIONA);
	const url = `http://api.open-notify.org/iss-now.json`;
	try {
		const response = await got(url);
		const json = JSON.parse(response.body);
		if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '*🕰  ' + "UNIX Epoch time:" +'* ```' + json.timestamp + '```\n\n' +
    '*🌐  ' + "Lattitude:" +'* ```' + json.iss_position.latitude + '```\n' +                                                                        
		'*🌐 ' + "Longitude:" +'* ```' + json.iss_position.longitude + '```\n', MessageType.text);
	} catch {
		return await message.client.sendMessage(message.jid, "*Error*", MessageType.text);
	}
});

Asena.addCommand({pattern: 'isspass ?(.*)', fromMe: false, desc: "Provides details of the passing of iss over a particular location.\n Provide lattitude and longitude for location.\n *Example: /isspass 12.3;75.1* \n You can use /weather <place_name> for getting lattitude and longitude of a place." }, async (message, match) => {
	if (match[1] === 'xx') return await message.reply(Lang.NEED_LOCATIONA);
	var topText, bottomText;
	
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        longitude = split[1];
        lattitude = split[0];
}

	
	const url = `http://api.open-notify.org/iss-pass.json?lat=${lattitude}&lon=${longitude}`;
	try {
		const response = await got(url);
		const json = JSON.parse(response.body);
		if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '*🕰  ' + "UNIX Epoch time:" +'* ```' + json.request.datetime + '```\n' +
                '*🌐  ' + "Lattitude:" +'* ```' + json.request.latitude + '```\n' +                                                                        
		'*🌐 ' + "Longitude:" +'* ```' + json.request.longitude + '```\n' +
		'*🛰 ' + "No of Passes:" +'* ```' + json.request.passes + '```\n\n' +
											 
		'*⏰ ' + "Pass_1 Duration(sec):" +'* ```' + json.response[0].duration + '```\n' +
                '*🕰  ' + "Pass_1 Risetime(epoch):" +'* ```' + json.response[0].risetime + '```\n\n' + 
											 
	       '*⏰ ' + "Pass_1 Duration(sec):" +'* ```' + json.response[1].duration + '```\n' +
                '*🕰  ' + "Pass_1 Risetime(epoch):" +'* ```' + json.response[1].risetime + '```\n\n' + 										 
		
	       '*⏰ ' + "Pass_1 Duration(sec):" +'* ```' + json.response[2].duration + '```\n' +
                '*🕰  ' + "Pass_1 Risetime(epoch):" +'* ```' + json.response[2].risetime + '```\n\n' + 	
											 
	        '*⏰ ' + "Pass_1 Duration(sec):" +'* ```' + json.response[3].duration + '```\n' +
                '*🕰  ' + "Pass_1 Risetime(epoch):" +'* ```' + json.response[3].risetime + '```\n\n' + 	
											 
	        '*⏰ ' + "Pass_1 Duration(sec):" +'* ```' + json.response[4].duration + '```\n' +
                '*🕰  ' + "Pass_1 Risetime(epoch):" +'* ```' + json.response[4].risetime + '```\n\n' + 	
											 
	        '*⏰ ' + "Pass_1 Duration(sec):" +'* ```' + json.response[5].duration + '```\n' +
                '*🕰  ' + "Pass_1 Risetime(epoch):" +'* ```' + json.response[5].risetime + '```\n\n' , MessageType.text);
	} catch {
		return await message.client.sendMessage(message.jid, "*Error*", MessageType.text);
	}
});
