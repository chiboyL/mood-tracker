export default class User{
    constructor(name, avatarUrl){
        this.name = name,
        this.avatarUrl = avatarUrl
    }

    updateName(newName){
        this.name = newName
    }
    updateAvatarUrl(newAvatarUrl){
        this.avatarUrl = newAvatarUrl
    }
    getUserDetails() {
        return `Name: ${this.name}, Avatar: ${this.avatarUrl}`;
    }
}