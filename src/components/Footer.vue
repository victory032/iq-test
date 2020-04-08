<template>
    <v-container>
        <h5>
            You wanna contribute to this project, 
            <a :href="footerUrl">
                Open a github PR
            </a>
        </h5>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            footerUrl: 'https://github.com/kizito917/iq-test'
        }
    }
}
</script>

<style>
    h5 {
        text-align: center;
    }
</style>