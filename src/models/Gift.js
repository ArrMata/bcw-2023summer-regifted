export class Gift {
    constructor(data) {
        this.id = data._id
        this.creatorId = data.creatorId
        this.gifUrl = data.url
        this.tag = data.tag
        this.opened = data.opened
    }
}