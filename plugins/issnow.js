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
