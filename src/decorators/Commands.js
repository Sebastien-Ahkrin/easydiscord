export default function Commands (commands) {
    return (target, key, descriptor) => {
        commands.forEach(command => {
            console.log(command)
        })
        return descriptor
    }
}