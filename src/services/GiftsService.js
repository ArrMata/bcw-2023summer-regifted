import { AppState } from "../AppState"
import { Gift } from "../models/Gift"
import { api } from "./AxiosService"

class GiftsService {
    async getGifts() {
        const res = await api.get('api/gifts')
        const gifts = res.data.map(gift => new Gift(gift))
        AppState.gifts = gifts
    }

    async postNewGift(url, tag) {
        const res = await api.post('api/gifts', { url: url.value, tag: tag.value })
        const gift = new Gift(res.data)
        AppState.gifts.unshift(gift)
    }

    async openGift(giftId) {
        const res = await api.put(`api/gifts/${giftId}`, { opened: true })
        const foundGiftIndex = AppState.gifts.findIndex(gift => gift.id == giftId)
        AppState.gifts[foundGiftIndex] = new Gift(res.data)
    }
}

export const giftsService = new GiftsService()