'use client'

import { useEffect } from 'react'

export default function CodeEnhancer() {
  useEffect(() => {
    // Add copy buttons to all code blocks
    const codeBlocks = document.querySelectorAll('pre code')
    
    codeBlocks.forEach((codeBlock) => {
      const pre = codeBlock.parentElement
      if (!pre || pre.querySelector('.copy-button')) {
        return // Already has a copy button
      }

      const button = document.createElement('button')
      button.className = 'copy-button absolute top-2 right-2 opacity-0 group-hover:opacity-100 bg-gray-800 hover:bg-gray-700 text-white text-xs px-2 py-1 rounded transition-opacity'
      button.textContent = 'Copy'
      
      button.onclick = async () => {
        try {
          await navigator.clipboard.writeText(codeBlock.textContent || '')
          button.textContent = 'Copied!'
          setTimeout(() => {
            button.textContent = 'Copy'
          }, 2000)
        } catch (err) {
          console.error('Failed to copy:', err)
          button.textContent = 'Failed'
          setTimeout(() => {
            button.textContent = 'Copy'
          }, 2000)
        }
      }

      // Make pre relative positioned and add group class
      pre.style.position = 'relative'
      pre.classList.add('group')
      pre.appendChild(button)
    })
  }, [])

  return null
}