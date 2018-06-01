import { Bot, Config, Login, Event, Command, Commands } from '../src/'

const prefix = "$"

@Config({
  version: "1.0",
  prefix,
  username: "name",
  icon_path: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/000080_Navy_Blue_Square.svg/2000px-000080_Navy_Blue_Square.svg.png",
  presence: { name: prefix + "help" }
})
class Ahk extends Bot {

  @Login('token')
  login ({ id }) {
    console.log("Connected" + id)
  }

  @Event('ready')
  ready (client) {
    console.log(client)
    console.log('I\'m ready !')
  }

  @Command(/^help$/, {
    description: "",
    permissions: {
      user: ['ADMINISTRATOR'],
      client: []
    }
  })
  helpCommand (command, channel, args) {
    message.reply('Hi')
  }

}

new Ahk()