<template>
<div class="Nav">
    <nav class="navbar navbar-light bg-light">
        <div class="d-flex flex-xl-row flex-lg-row flex-md-column flex-sm-column flex-column justify-content-between align-items-center">
            <router-link class="navbar-brand ml-3" to="/">
                <img alt="MNPD logo" src="../assets/Metro_Nashville_Police.png" width="150" height="150">
            </router-link>
            <div class="d-flex justify-content-start align-items-center">
                <h1 class="mr-3">Metro Nashville Police Active Dispatch</h1>
            </div>
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