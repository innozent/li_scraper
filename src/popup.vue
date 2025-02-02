<!-- src/Popup.vue -->
<template>
    <div class="popup-container">
        <h1>Job Scraper</h1>
        <button @click="scrapeJobs">Scrape Jobs</button>
        <div v-if="jobs.length">
            <div v-for="job in jobs" :key="job.id">
                {{ job.title }} - {{ job.company }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const jobs = ref<any[]>([])

const scrapeJobs = () => {
    chrome.runtime.sendMessage({ action: 'scrapeJobs' }, (response) => {
        jobs.value = response.jobs
    })
}
</script>