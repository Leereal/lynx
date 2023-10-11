<template>
    <div class="shadow-xl rounded p-5 justify-between flex mb-7" v-motion-roll-top>
        <div>
            <div class="font-bold text-2xl text-primary">/{{ link.shortKey }}</div>
            <div class="text-sm text-gray-300">
                {{ link.longUrl.slice(0, 20) + '...' }}
            </div>
        </div>
        <UButton icon="i-heroicons-clipboard-document-list" class="rounded-full w-12 h-12 justify-center "
            @click="handleCopy" />
    </div>
</template>

<script lang="ts" setup>
const config = useRuntimeConfig()
const props = defineProps<{
    link: {
        shortKey: string;
        longUrl: string;
        id: string
    }
}>()
const handleCopy = () => {
    navigator.clipboard.writeText(`${config.public.appUrl}/${props.link.shortKey}`)
}
</script>