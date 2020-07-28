<template>
<div class="main">
        <div class="content">
            <p>{{ message | capitalize | reverse }}</p>
            <h1>{{ error | capitalize }}</h1>
        </div>
    </div>

</template>

<script>
export default {
    name: 'Signin',
    data(){
        return{
            message: 'S\'inscrire',
            error: 'Page actuellement indisponible'
        }
    }
}

</script>

<style>


</style>