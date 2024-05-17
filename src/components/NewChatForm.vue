<template >

    <div>

        <form action="">
            <textarea placeholder="Writing... And press enter." v-model="message" @keypress.enter.prevent="handeSubmit"></textarea>
        </form>

    </div>

</template>

<script>

import { ref } from "vue";
import getUser from '@/composables/getUser';
import {timestamp} from '../firebase/config';

export default {
    setup() {
        const {user} = getUser()
        const message = ref('')

        const handeSubmit = async () => {
            const chat = {
                name: user.value.displayName,
                message: message.value,
                createdAt : timestamp()
            };
            console.log(chat)
            message.value = "";
        };

        return {message,handeSubmit}
    }    
};

</script>

<style scoped>

    form {
        margin: 10px;
    }
    
    textarea {
        width: 100%;
        max-width: 100%;
        margin-bottom: 10px;
        padding: 10px;
        box-sizing: border-box;
        border: 0;
        border-radius: 20px;
        font-family: inherit;
        outline: none;
    }

</style>