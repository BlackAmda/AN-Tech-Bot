const Asena = require('../events');
const { MessageType } = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const { errorMessage, infoMessage } = require('../helpers');
const Lang = Language.getString('instagram') ;





Asena.addCommand({ pattern: 'apod ?(.*)', fromMe: false, desc: "Provides the Astronomy Picture Of the Day from the NASA site." }, async (message, match) => {


    await axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=ccdRSkRerDoJHn2g36DGnJgyctfkGDml3ZzMWWxL`)
      .then(async (response) => {
        const {
          copyright,
          date,
          explanation,
          url,
          title,
        } = response.data

        const profileBuffer = await axios.get(url, {responseType: 'arraybuffer'})

        const msg = `
        *${"Title"}*: ${title}
        *${"Copyright"}*: ${copyright}    
        *${"Date"}*: ${date}
        *${Explanation}*: ${explanation}`

        await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, {
          caption: msg
        })
      })
      .catch(
        async (err) => await message.sendMessage(errorMessage("Error")),
      )
  },
)

