<script setup lang="ts">

const props = withDefaults(defineProps<{
    type: string,
    color?: string,
    size?: string,
    fill?: number,
    weight?: number,
    grade?: number,
    opticalSize?: number,
}>(), {
    size: "45px",
    fill: 0,
    weight: 400,
    grade: 0,
    opticalSize: 24
})

</script>

<template>
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

    <div class="material-symbols-outlined">{{ props.type }}</div>
</template>

<style scoped>
.material-symbols-outlined {
    color: v-bind(color);
    font-size: v-bind(size);
    font-variation-settings:
        'FILL' v-bind(fill),
        'wght' v-bind(weight),
        'GRAD' v-bind(grade),
        'opsz' v-bind(opticalSize)
}
</style>
