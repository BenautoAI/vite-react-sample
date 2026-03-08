import React from 'react'
import CardsList from './src/components/CardsList/index'

export function RenderCardsList() {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Cards List Component</h1>
      <CardsList />
    </div>
  )
}

export default RenderCardsList
