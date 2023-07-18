<template>
    <div class="row">
      <GiftForm />
      <div class="col-9 py-5 px-3 gift-area">
        <div v-if="gifts" class="row">
          <div v-for="gift in gifts" :key="gift.id" class="col-3">
            <Gift :gift="gift" />
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import Pop from '../utils/Pop.js';
import {giftsService} from '../services/GiftsService.js'
import { computed, onMounted } from 'vue';
import { AppState } from '../AppState';
import Gift from '../components/Gift.vue';
import GiftForm from '../components/GiftForm.vue'

export default {
  setup() {

    const _getGifts = async() => {
      try {
        await giftsService.getGifts()
      } catch (error) {
        Pop.error(error)
      }
    }

    onMounted(() => {
      _getGifts()
    })

    return {
      gifts: computed(() => AppState.gifts)
    }
  },
  components: { Gift, GiftForm }
}
</script>

<style scoped lang="scss">

.gift-area {
  max-height: 95dvh;
  overflow-y: scroll;
  background-color: rgb(14, 14, 52);
  color: white;
}

.form-area {
  background-color: rgb(0, 61, 0);
  color: white;
}
</style>
