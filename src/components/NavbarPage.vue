<template >
    <nav v-if="user">

        <div>
            <p>Hi, {{ user.displayName }}</p>
            <p class="email">Currently logged in as... {{ user.email }}</p>
            
        </div>
        
        <button class="pointer" @click="handleClick">Logout</button>

    </nav>

</template>

<script>
import getUser from '@/composables/getUser';
import useLogout from '@/composables/useLogout';


export default {
    components:{useLogout,getUser}, 
    setup() {
        const {logout,error} = useLogout();
        const {user} = getUser()

        const handleClick = async () => {
            await logout()
            if(!error.value) {
                console.log('user logged out.!')
            }
        }

        return {handleClick,user}
    }    
}
</script>

<style >
    nav {
        padding: 20px;
        border-bottom: 1px solid red;
        display: flex;
        justify-content: space-between;
        align-items: center
    }
    nav p {
        margin: 2px auto;
        font-size: 20px;
        color: black;
        text-align: left;
    }
    nav p.email {
        font-size: 14px;
        color: rgb(212, 176, 176);
    }
    .pointer {
        cursor: pointer;
    }
    .pointer:hover {
        background-color: blueviolet;
    }
  
    
</style>