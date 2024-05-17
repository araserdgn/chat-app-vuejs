<template >
    <div>
        <form @submit.prevent="handleSubmit">
            <input type="text" required placeholder="Nick" v-model="displayName" />
            <input type="email" required placeholder="Email" v-model="email" />
            <input type="password" required placeholder="Password" v-model="password" />
            
            <div class="error">
                {{ error }}
            </div>

            <button >Sign Up</button>
        </form>
    </div>
</template>

<script>
import useSignup from '@/composables/useSignup';
import {ref} from 'vue'
export default {
    setup(props,context) {
        const {error,signup} = useSignup()
        const displayName = ref('')
        const email = ref('')
        const password = ref('')

        const handleSubmit = async () => {
            await signup(email.value, password.value,displayName.value)
            if(!error.value) {
                context.emit('signup')
            }
        }

        return { displayName,email,password,handleSubmit,error}
    }
};
</script>

<style>
    
</style>