<template>
<div class="Nav">
    <nav class="navbar navbar-light bg-light">
        <router-link class="navbar-brand ml-3" to="/">
            <img alt="MNPD logo" src="../assets/Metro_Nashville_Police.png" width="150" height="150">
        </router-link>
        <div class="d-flex justify-content-start align-items-center">
            <h1 class="mr-3">Metro Nashville Police Active Dispatch</h1>
        </div>
    </nav>
</div>
</template>

<script>
export default {
    name: 'Nav'
}
</script>

<style lang="scss" scoped>
.Nav {
    display: block;
    .navbar {
        div {
            h1 {
                font-size: 3.5rem;
            }
        }
    }
}
</style>