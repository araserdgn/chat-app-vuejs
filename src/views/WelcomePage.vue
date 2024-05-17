<template >
    <div class="welcome container">
        <p>Welcome</p>

        <div v-if="showLogin">
            <h2>Login</h2>
            <login-page @login="enterChat">
    
            </login-page>

            <p>NO account yet? <span @click="showLogin = false">SignUp</span></p>
        </div>

        <div v-else>
            <h2>SignUp</h2>
            <sign-up-form @signup="enterChat">
                
            </sign-up-form>

            <p>Already register ? <span @click="showLogin=true">Login</span></p>
        </div>

    </div>
</template>

<script>
import SignUpForm from '@/components/SignUpForm.vue';
import LoginPage from '@/components/LoginPage.vue';
import { ref } from 'vue';
import {useRouter} from 'vue-router'

export default {
    components: {SignUpForm,LoginPage},
    setup() {
        const showLogin = ref(true);
        const router = useRouter()

        const enterChat = () => {
            router.push({name:'chatroom'}) 
        }

        return {showLogin,enterChat}
    }
}
</script>

<style>
    .welcome {
        text-align: center;
        padding: 20px 0;
    }
    .welcome form {
        width: 300px;
        margin: 20px 0 10px;
        margin:auto;
    }
    .welcome label {
        display: block;
        margin: 20px 0 10px;
        
    }
    .welcome input {
        width: 100%;
        padding: 10px;
        border-radius: 20px;
        border:1px solid white;
        outline: none;
        color: bisque;
        margin: 10px
    }

    .welcome span {
        font-weight: bold;
        text-decoration: underline;
        cursor: pointer;
    }
    .welcome button {
        margin: 20px auto;
    }
</style>