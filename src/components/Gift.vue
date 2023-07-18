<template>
    <div @click="openGift(gift.id)" class="text-center">
        <img v-if="gift.opened" class="img-fluid" :src="gift.gifUrl" :alt="gift.creatorId" />
        <i v-else class="mdi mdi-gift"></i>
        <h3>{{ gift.tag }}</h3>
    </div>
</template>

<script>
import { Gift } from '../models/Gift';
import { giftsService } from '../services/GiftsService';
import Pop from '../utils/Pop';

export default {
    props: {
        gift: {type: Gift, required: true}
    },
    setup(){
        const openGift = async(giftId) => {
            try {
                await giftsService.openGift(giftId)
            } catch (error) {
                Pop.error(error)
            }
        }

        return {
            openGift
        }
    }
}
</script>

<style lang="scss" scoped>

    i {
        font-size: 5.5rem;
    }

</style>