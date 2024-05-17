<template>

    <div class="container">

        <navbar-page>
            
        </navbar-page>

        <new-chat-form>
            
        </new-chat-form>
        
    </div>

</template>
<script>
import NavbarPage from '@/components/NavbarPage.vue';
import NewChatForm from '@/components/NewChatForm.vue';
import getUser from '@/composables/getUser'
import {watch} from 'vue';
import {useRouter} from 'vue-router'

export default {
    components:{NavbarPage,NewChatForm},
    setup() {
        const {user} = getUser()
        const router = useRouter()

        watch(user, () => {
            if (!user.value) {
                router.push({name:'Welcome'})
            }
        })
    }
}
</script>

<style >

</style>