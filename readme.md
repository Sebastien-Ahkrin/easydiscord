# AhkFramework

> A framework to create discord robots easily, with commands and events.

## Install

```bash
npm install easydiscord
```

## Usage

```javascript
import { Bot, Config, Login, Event, Command } from '../src/'

const prefix = "$"

@Config({
  version: "1.0",
  prefix,
  username: "name",
  icon_path: "link",
  presence: { name: prefix + "help" }
})
class Ahk extends Bot {

  @Login('token')
  login ({ id }) {
    console.log("Connected")
  }

  @Event('ready')
  ready () {
    console.log('I\'m ready !')
  }

  @Command(/^help$/, {
    description: "",
    permissions: {
      user: ['ADMINISTRATOR'],
      client: []
    }
  })
  helpCommand (command, message) {
    message.reply('Hi')
  }

}

new Ahk()
```

For more informations about "permissions" see [HERE](https://discordapp.com/developers/docs/topics/permissions)
Source code on github : [HERE](https://github.com/Sebastien-Ahkrin/easydiscord)

## License

[MIT](http://vjpr.mit-license.org)
