<template >

    <div>

        <form action="">
            <textarea placeholder="Writing... And press enter." v-model="message" @keypress.enter.prevent="handeSubmit"></textarea>
            <div class="error">
                {{ error }}
            </div>
        </form>

    </div>

</template>

<script>

import { ref } from "vue";
import getUser from '@/composables/getUser';
import {timestamp} from '../firebase/config';
import {useCollection} from "../composables/useCollection.js";

export default {
    setup() {
        const {user} = getUser()
        const message = ref('')
        const {addDoc,error} = useCollection('messages');

        const handeSubmit = async () => {
            const chat = {
                name: user.value.displayName,
                message: message.value,
                createdAt : timestamp()
            };
            await addDoc(chat)
            if(!error.value) {
                message.value=""
            }
            else {
                message.value = error.value
            }

        };

        return {message,handeSubmit,error}
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