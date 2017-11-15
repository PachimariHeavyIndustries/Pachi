# Pachi

## About

A fork of the awesome [Gravebot](https://github.com/Gravebot/Gravebot)

If you want something feature complete and supported by people who probably know more what they're doing, go there :)

## [Changelog](CHANGELOG.md)

## How to use

Currently, the only viable option is to self host. We're not currently providing instructions for this, however we haven't diverged that much from Pachi yet so if you're really brave and want this version, their instructions may work for ours too. Or not. 

For self hosting, click [here](#localconfig).

## Commands
#### Help:
- `!help fun` - List of fun commands
- `!help useful` - List of useful commands
- `!help info` - List of information commands
- `!help games` - List of game commands
- `!help other` - List of other commands
- `!help all` - List all available commands in private chat
- `!memelist` - List of meme names for the `!meme` command
- `!setlanguage` - Set all help text to respond in a specified language

#### Fun:
- `!8ball` *question* - Answers the question
- `!animals` - Get various animal pictures
- `!cat` bomb *count* - Bombs chat with adorable cats
- `!pug` bomb *count* - Bombs chat with adorable pugs
- `!snake` bomb *count* - Bombs chat with adorable snakes
- `!chat` *text* - Chats with you
- `!coin` - Flips a coin
- `!comics` - Get a random comic from a bunch of different artists
- `!decide` *something* **or** *something...* - Decides between given words
- `!drama` *number* - Responds with a drama image, if no number is written, a random one
- `!emoji` *number* - Responds with an emoji copypasta, if no number is written, a random one
- `!meme` *meme name "top text" "bottom text"* -  Creates a meme with the given meme name and text
- `!quote` *number* - Responds with a quote, if no number is written, a random one
- `!robohash` - Get robot and monster images
- `!monster` - Get your personal monster
- `!robot` - Get your personal robot
- `!robothead` - Get your personal robot head
- `!roll` *times sides* - Rolls the dice a number of times with a number of sides, see `!random` for advanced generators
- `!translate` - Translate text in funny ways
- `!leet` *sentence* - 1337ifies the sentence
- `!snoop` *sentence* - Snoopifies tha sentence
- `!yoda` *sentence* - Yodaifies the sentence
- `!no` - Returns a random "No" Image
- `!yes` - Same thing, but for "Yes"
- `!sad` - Yep, but for "Sad"
- `!lego` - You won't get this one. It won't make sense to you
- `!dontgo` - Returns a form of the "It's dangerous to go alone" meme image

#### Useful:
- `!ddg` *search terms* - Search the web, can also calculate and convert. Search other websites by appending its shortening (e.g. `!ddg !yt Hello`) See <https://duckduckgo.com/bang> for a list.
- `!gif` *gif tags* - Gets a gif from Giphy or Popkey matching the given tags (Use `!giphy` or `!popkey` to search the specific sites)
- `!join` - Shows a link that can be used to invite Pachi to your server
- `!random` - Generate truly random numbers and strings
- `!fraction` *amount* *decimal places* *replace(optional)* - Generate a number of random real numbers between 0 and 1 with set decimal places, write **replace** at the end to disable duplicates (e.g. `!fraction 1 5 replace`)
- `!gaussian` *amount* *mean* *deviation* *significant digits* - Generate a number of random numbers from a Gaussian distribution (e.g. `!gaussian 1 50 10 5`)
- `!integer` *amount* *min* *max* *replace(optional)* - Generate a number of random integers between min and max, write **replace** at the end to disable duplicates (e.g. `!integer 2 1 50 replace`)
- `!string` *amount* *length* *charset(optional)* *replace(optional)* - Generate a number of random strings of a given length, can also input your own charset (default is the alphabet), as well as write **replace** at the end to disable duplicates. (e.g. `!string 1 10 abc123 replace`)
- `!unshorten` *url* - Unshortens a shortened link
- `!urban` *search terms* - Returns the summary of the first matching search result from Urban Dictionary
- `!videocall` *__Optional__ @username* - Start a one click video call or screenshare directly on Appear.in. Mention users to make it private.
- `!wiki` *search terms* - Returns the summary of the first matching search result from Wikipedia
- `!wolfram` *query* - Query Wolfram Alpha for almost anything
- `!youtube` *video tags* - Gets a video from Youtube matching the given tags

#### Information:
- `!avatar` *username* - Responds with your avatar, unless a username is specified
- `!channelinfo` *channelname* - Gives information about this channel, unless a channelname is specified
- `!ping` - Pong! Check Pachi's pulse
- `!serverinfo` *servername* - Gives information about this server, unless a servername is specified
- `!servers` - Lists how many servers, channels and users the bot is connected to
- `!uptime` - Shows how long the bot has been online
- `!userinfo` *username* - Gives information about this user, unless a username is specified
- `!version` - Get information on the latest version of Pachi

#### Games:

**Dota2**
- `!dota2` - Help
- `!dota2 best` *position* - Get the top 10 Heroes for a specific position
- `!dota2 build` *hero-name* - Get the most popular build for a Hero
- `!dota2 counters` *hero-name* - Get the top 10 counters for a Hero
- `!dota2 impact` - Get the top 10 Heroes with the biggest impact
- `!dota2 items` *hero-name* - Get the top 10 most used items for a Hero

**League of Legends**
- `!lol` - Help
- `!lol bans` - Get the top 10 most common bans
- `!lol best` *position* - Get the top 10 best champs for a position
- `!lol counters` *champ-name position* - Get the top 10 counters for a Champion and Position
- `!lol items` *champ-name position* - Get the highest win item sets for a Champion and Position
- `!lol match` *region summoner-name* - Get rank, champ, winrate, and games for all players in a __current__ match.
- `!lol skills` *champ-name position* - Get the highest win skills for a Champion and Position
- `!lol status` - Get the LoL Game and Client server status for all regions

**Overwatch**
- `!ow` - Help
- `!ow averages region battletag` - Player average stats
- `!ow time played region battletag` - Heroes most played
- `!ow games won region battletag` - Heroes with the most wins
- `!ow win percent region battletag` - Heroes with the highest win percentage
- `!ow eliminations region battletag` - Heroes with the most eliminations per life
- `!ow kill streak region battletag` - Heroes with the highest kill streak
- `!ow multikill region battletag` - Heroes with the most multikills
- `!ow objective kills region battletag` - Heroes with the most objective kills

#### Other:
- `!ayylmao`
- `!chillinmyb`
- `!endall`
- `!feelsbadman`
- `!feelsgoodman`
- `!jpeg`
- `!kappa`
- `!kappaHD`
- `!skeltal`
- `!starwars4`
- `!starwars5`

---

<a name="localconfig" />
## Local Configuration

Rename `config.js.example` to `config.js` and fill in the required information. Note only variables with the `*Required*` comment are needed, everything else is optional.

## Local Installation
#### Windows:
**Warning**: Windows may have issues, even if all steps are done, sadly, we are not able to find the right dependencies for it (mostly regarding League of Legends and Wolfram commands), if you are familiar with coding, you can try messing around, either finding the right dependencies, or disabling the commands. If you are not familiar with coding, I would advise you to try out Linux, just install it alongside Windows and give it like 20GB of space, it will be plenty, and you will have a good experience. Feel free to ask for help regarding installation in Pachi's Lair, just keep this in mind.

- Install [node.js](https://nodejs.org/en/) v4.0 or higher
- Install [python v2.7.3](https://www.python.org) ([32 bit](https://www.python.org/ftp/python/2.7.3/python-2.7.3.msi), [64 bit](https://www.python.org/ftp/python/2.7.3/python-2.7.3.amd64.msi))
- Install [Microsoft Visual Studio C++ Express](http://go.microsoft.com/?linkid=9816758)
- Install [node-gyp](https://github.com/nodejs/node-gyp) (open the [command prompt](http://windows.microsoft.com/en-us/windows/command-prompt-faq) and write `npm install -g node-gyp`)
- Install [redis](http://redis.io/download)
- Install [libxml2](https://www.zlatkovic.com/libxml.en.html) and add it to your PATH (note that this may not work and some extra tinkering may be needed, if you find a better way of installing it, please share it)
- If you are unable to install it, you may remove the wolfram-alpha dependency from package.json, and remove wolfram.js in the lib folder. That is the only command that uses libxml2.
- Run `npm-install.bat` to install the Node dependencies
- Run `launch.bat` to start the bot

#### Linux:
- Install [node.js](https://nodejs.org/en/) v4.0 or higher
- Install [gcc](https://gcc.gnu.org) and [libxml2](http://www.xmlsoft.org/) (open the [terminal](http://www.howtogeek.com/140679/beginner-geek-how-to-start-using-the-linux-terminal/) and write `sudo apt-get install build-essential libxml2-dev libicu52 libjpeg8 libfontconfig1 libwebp5 libssl1.0.0`)
- Install [node-gyp](https://github.com/nodejs/node-gyp) (open the [terminal](http://www.howtogeek.com/140679/beginner-geek-how-to-start-using-the-linux-terminal/) and write `sudo npm install -g node-gyp`)
- Install [redis](http://redis.io/download)
- [cd](https://en.wikipedia.org/wiki/Cd_%28command%29) to the root directory and run `npm install`
- Run `npm start`

## Updating

Updating Pachi is like any other NodeJS app. Just run `git pull && npm install`.

---

## Feature Requests

Have a feature in mind? We'd love to hear about it. Feel free to [open an issue](https://github.com/Pachi/Pachi/issues/new) and let us know.

## [License](LICENSE)
