<template>
    <div class="Table col-12 text-center">
        <table class="table table-responsive-lg table-responsive-md table-responsive-sm">
            <thead>
                <slot name="headers"></slot>
                <th></th>
            </thead>
            <tbody>
                <tr v-for="(x, index) in data" :key="index">
                    <td v-for="(column, colIndex) in tableHeaders" :key="colIndex" class="align-middle">
                        {{ x[column] }}
                    </td>
                    <td>
                        <router-link 
                            :to="{
                                name: 'Detail',
                                params: {
                                    call: x
                                }
                            }" 
                            class="btn router-link"
                        >
                        View
                        </router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'Table',
    props: {
        data: {
            type: Array,
            default() {
                return []
            }
        },
        handleClick: {
            type: Function,
            default() {
                return () => {}
            }
        }
    },
        computed: {
        tableHeaders() {
            return this.$slots.headers.map(x => x.data.attrs['data-prop']);
        }
    }
}
</script>

<style lang="scss" scoped>
@import '..//styles/_variables.scss';

.Table {
    display: block;
}

.Table .router-link {
    background-color: $secondaryColor;
    border: 1px solid black;
}
</style>