import { contextBridge } from 'electron'

if (!process.contextIsolated) {
  throw new Error('Context isolation is disabled. Please enable it to use this preload script.')
}

try {
  contextBridge.exposeInMainWorld('electronAPI', {})
} catch (e) {
  console.error(e)
}
