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

Asena.addCommand({pattern: 'sfnews ?(.*)', fromMe: false, desc: Lang.NEWS_DESC}, async (message, match) => {
	if (match[1] === 'hi') return await message.reply(wait...);
	const url = `https://www.spaceflightnewsapi.net/api/v2/articles`;
	try {
		const response = await got(url);
		const json = JSON.parse(response.body);
		if (response.statusCode === 200) return await message.client.sendMessage(message.jid,'*📁 ' + "Spaceflight News" +'* \n\n\n' +
		'*🗞️ ' + "Title" +':* ```' + json.data[0].title + '```\n' + 
                '*📰 ' + "Summary" +':* ```' + json.data[0].summary + '```\n' + 
		'*🔗 ' + Lang.RMLINK +':* ```' + json.data[0].url + '```\n\n' +
                '*🗞️ ' + "Title" +':* ```' + json.data[1].title + '```\n' +                                                                         
		'*📰 ' + "Summary" +':* ```' + json.data[1].summary + '```\n' + 
		'*🔗 ' + Lang.RMLINK +':* ```' + json.data[1].url + '```\n\n' + 
                '*🗞️ ' + "Title"+':* ```' + json.data[2].title + '```\n' +
                '*📰 ' + "Summary" +':* ```' + json.data[2].summary + '```\n' + 
		'*🔗 ' + Lang.RMLINK +':* ```' + json.data[2].url + '```\n\n' + 
                '*🗞️ ' + "Title" +':* ```' + json.data[3].title + '```\n' +
   	        '*📰 ' + "Summary" +':* ```' + json.data[3].summary + '```\n' + 
		'*🔗 ' + Lang.RMLINK +':* ```' + json.data[3].url + '```\n\n' + 
                '*🗞️ ' + "Title" +':* ```' + json.data[4].title + '```\n' +                                                                         
                '*📰 ' + "Summary" +':* ```' + json.data[4].summary + '```\n' + 
		'*🔗 ' + Lang.RMLINK +':* ```' + json.data[4].url + '```\n\n'+ 
		 '*🗞️ ' + "Title" +':* ```' + json.data[5].title + '```\n' +                                                                         
                '*📰 ' + "Summary" +':* ```' + json.data[5].summary + '```\n' + 
		'*🔗 ' + Lang.RMLINK +':* ```' + json.data[5].url + '```\n\n'+
		 '*🗞️ ' + "Title" +':* ```' + json.data[6].title + '```\n' +                                                                         
                '*📰 ' + "Summary" +':* ```' + json.data[6].summary + '```\n' + 
		'*🔗 ' + Lang.RMLINK +':* ```' + json.data[6].url + '```\n\n'+									 
		 '*🗞️ ' + "Title" +':* ```' + json.data[7].title + '```\n' +                                                                         
                '*📰 ' + "Summary" +':* ```' + json.data[7].summary + '```\n' + 
		'*🔗 ' + Lang.RMLINK +':* ```' + json.data[7].url + '```\n\n'+									 
		 '*🗞️ ' + "Title" +':* ```' + json.data[8].title + '```\n' +                                                                         
                '*📰 ' + "Summary" +':* ```' + json.data[8].summary + '```\n' + 
		'*🔗 ' + Lang.RMLINK +':* ```' + json.data[8].url + '```\n\n'+
		'*🗞️ ' + "Title" +':* ```' + json.data[9].title + '```\n' +                                                                         
                '*📰 ' + "Summary" +':* ```' + json.data[9].summary + '```\n' + 
		'*🔗 ' + Lang.RMLINK +':* ```' + json.data[9].url + '```\n\n', MessageType.text);
	} catch {
		return await message.client.sendMessage(message.jid, "*Error*", MessageType.text);
	}
});
