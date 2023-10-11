<template></template>
<script setup lang="ts">
import { Database } from '@/types/supabase'
const params = useRoute().params;
const client = useSupabaseClient<Database>();

if (!params.id) {
    throw createError({
        statusCode: 404,
        message: 'Not Found'
    })
}
const { data } = await useAsyncData('link', async () => {
    const { data, error } = await client.from('links').select('*').eq('short_key', params.id).single()
    if (error) {
        throw createError({
            statusCode: 404,
            message: 'Not Found'
        })

    }
    return data
})

if (data.value?.long_url) {
    useExternalRedirect(data.value?.long_url)
} else {
    throw createError({
        statusCode: 404,
        message: 'Not Found'
    })
}
</script>