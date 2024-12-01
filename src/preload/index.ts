import { contextBridge } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

if(!process.contextIsolated){
  throw new Error('Contextisoloation must be enabled inbrowser window')

}

try{
  contextBridge.exposeInMainWorld('context', {
    // TODO
  })
} catch (error) {
  console.log(error)
}