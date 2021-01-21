<template>
    <div class="Table col-12 text-center">
        <table class="table">
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
                        <button class="btn" @click="() => handleClick(x.incident_type)">View</button>
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

.Table button {
    background-color: $secondaryColor;
    border: 1px solid black;
}
</style>