<template>
    <div class="shadow-xl rounded p-5 justify-between flex mb-7">
        <div>
            <div class="font-bold text-2xl text-primary">/{{ link.shortKey }}</div>
            <div class="text-sm text-gray-300">
                {{ link.longUrl }}
            </div>
        </div>
        <UButton icon="i-heroicons-clipboard-document-list" class="rounded-full w-12 h-12 justify-center " />
    </div>
</template>

<script lang="ts" setup>
defineProps<{
    link: {
        shortKey: string;
        longUrl: string;
        id: string
    }
}>()
</script>