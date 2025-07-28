'use client'

import { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism'

interface CodeBlockProps {
  children: string
  className?: string
  fileName?: string
}

export default function CodeBlock({ children, className, fileName }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)
  
  // Extract language from className (e.g. "language-typescript" -> "typescript")
  const language = className?.replace('language-', '') || 'text'
  
  // Get theme from CSS custom properties
  const isDark = typeof window !== 'undefined' 
    ? document.documentElement.classList.contains('dark')
    : false

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(children)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <div className="relative group">
      <button
        onClick={copyToClipboard}
        className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity bg-white/10 hover:bg-white/20 border border-white/20 rounded px-2 py-1 text-xs text-white/80 hover:text-white"
      >
        {copied ? 'Copied!' : 'Copy'}
      </button>
      {fileName && (
        <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 text-sm font-mono border-b border-gray-200 dark:border-gray-700 rounded-t-md">
          {fileName}
        </div>
      )}
      <SyntaxHighlighter
        language={language}
        style={isDark ? oneDark : oneLight}
        customStyle={{
          margin: 0,
          borderRadius: fileName ? '0 0 6px 6px' : '6px',
          fontSize: '14px',
          lineHeight: '1.5',
        }}
        showLineNumbers={false}
        wrapLines={true}
        wrapLongLines={true}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  )
}