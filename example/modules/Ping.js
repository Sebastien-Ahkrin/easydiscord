
@Permissions({
  user: '',
  client: ''
})
class Ping {
  
  @Command(/^help$/)
  ping () {
    console.log('salut')
  }

}