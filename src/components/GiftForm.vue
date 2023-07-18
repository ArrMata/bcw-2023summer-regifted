<template>
    <div class="col-3 form-area py-5">
        <form @submit.prevent="postNewGift">
            <div class="mb-3">
                <label for="tag" class="form-label">Tag</label>
                <input v-model="tag" required minlength="3" maxlength="120" type="text" class="form-control" id="tag"  placeholder="Tag your Gift!">
            </div>
            <div class="mb-3">
                <label for="gifUrl" class="form-label">URL</label>
                <input v-model="url" type="text" required maxlength="300" class="form-control" id="gifUrl" placeholder="Gif URL">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>

<script>
import { ref } from 'vue';
import Pop from '../utils/Pop';
import { giftsService } from '../services/GiftsService';

export default {
    setup() {
        const tag = ref("")
        const url = ref("")

        const postNewGift = async() => {
            try {
                await giftsService.postNewGift(url, tag)
            } catch (error) {
                Pop.error(error)
            }
        }

        return {
            tag,
            url,
            postNewGift
        }
    }
}
</script>

<style lang="scss" scoped>

</style>