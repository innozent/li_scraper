// // src/content.ts
// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//     if (request.action === 'scrapeJobs') {
//         const jobs = Array.from(document.querySelectorAll('.jobs-search__results-list li'))
//             .map(job => ({
//                 title: job.querySelector('.job-card-list__title')?.textContent?.trim(),
//                 company: job.querySelector('.job-card-container__company-name')?.textContent?.trim(),
//                 location: job.querySelector('.job-card-container__metadata-item')?.textContent?.trim()
//             }))
//         sendResponse({ jobs })
//     }
// })

import { createApp } from 'vue'
import App from './App.vue'

const root = document.createElement('div')
root.id = 'crx-root'
document.body.append(root)

const app = createApp(App)
app.mount(root)