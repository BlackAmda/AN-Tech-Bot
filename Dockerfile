FROM fusuf/whatsasena:latest

RUN git clone https://github.com/BlackAmda/AN-Tech-Bot /root/AN-Tech-Bot
WORKDIR /root/AN-Tech-Bot/
ENV EN=English
RUN npm install supervisor -g
RUN yarn install --no-audit


CMD ["node", "bot.js"]
