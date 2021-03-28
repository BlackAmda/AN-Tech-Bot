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


Asena.addCommand({pattern: 'epoch2dt ?(.*)', fromMe: false, desc: "Converts the given timestamp into normal date and time (GMT)." }, async (message, match) => {
	if (match[1] === '') return await message.reply("Need epoch timestamp");
	const url = `https://showcase.api.linx.twenty57.net/UnixTime/fromunixtimestamp?unixtimestamp=${match[1]}`;
	try {
		const response = await got(url);
		const json = JSON.parse(response.body);
		if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '*🕰  ' + "UNIX Epoch time:" +'* ```' + match[1] + '```\n\n' +                                                                       
		'*📆⏰ ' + "Date&Time:" +'* ```' + json.Datetime + '```\n', MessageType.text);
	} catch {
		return await message.client.sendMessage(message.jid, "*Error*", MessageType.text);
	}
});

Asena.addCommand({pattern: 'dt2epoch ?(.*)', fromMe: false, desc: "Converts the given date and time(GMT) into Unix epoch (GMT).\n *Example: /dt2epoch 2021/03/28 16:38:00" }, async (message, match) => {
	if (match[1] === '') return await message.reply("Provide a date and time(GMT)");
	const url = `https://showcase.api.linx.twenty57.net/UnixTime/tounixtimestamp?datetime=${match[1]}`;
	try {
		const response = await got(url);
		const json = JSON.parse(response.body);
		if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '*📆⏰   ' + "Date&Time:" +'* ```' + match[1] + '```\n\n' +                                                                       
		'*🕰 ' + "UNIX Epoch time:" +'* ```' + json.UnixTimeStamp + '```\n', MessageType.text);
	} catch {
		return await message.client.sendMessage(message.jid, "*Error*", MessageType.text);
	}
});
