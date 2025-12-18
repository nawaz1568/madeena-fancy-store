import React, { createContext, useContext, useState } from 'react'
import { sendLowStockAlert } from '../utils/emailService'

const InventoryContext = createContext()

export const useInventory = () => {
  const context = useContext(InventoryContext)
  if (!context) {
    throw new Error('useInventory must be used within InventoryProvider')
  }
  return context
}

export const InventoryProvider = ({ children }) => {
  const [inventory, setInventory] = useState({
    1: { stock: 25, lowStockThreshold: 5 },
    2: { stock: 15, lowStockThreshold: 3 },
    3: { stock: 30, lowStockThreshold: 10 },
    4: { stock: 8, lowStockThreshold: 5 },
    5: { stock: 12, lowStockThreshold: 5 },
    6: { stock: 3, lowStockThreshold: 2 },
    7: { stock: 20, lowStockThreshold: 5 },
    8: { stock: 7, lowStockThreshold: 3 },
    9: { stock: 35, lowStockThreshold: 10 },
    10: { stock: 18, lowStockThreshold: 5 },
    11: { stock: 22, lowStockThreshold: 5 },
    12: { stock: 9, lowStockThreshold: 3 },
    13: { stock: 45, lowStockThreshold: 15 },
    14: { stock: 16, lowStockThreshold: 5 },
    15: { stock: 11, lowStockThreshold: 3 }
  })

  const updateStock = async (productId, quantity, product) => {
    setInventory(prev => {
      const currentStock = prev[productId]?.stock || 0
      const newStock = Math.max(0, currentStock - quantity)
      
      // Check for low stock
      if (newStock <= prev[productId]?.lowStockThreshold) {
        sendLowStockAlert({ ...product, stock: newStock })
      }
      
      return {
        ...prev,
        [productId]: {
          ...prev[productId],
          stock: newStock
        }
      }
    })
  }

  const getStock = (productId) => {
    return inventory[productId]?.stock || 0
  }

  const isLowStock = (productId) => {
    const item = inventory[productId]
    return item ? item.stock <= item.lowStockThreshold : false
  }

  const isOutOfStock = (productId) => {
    return getStock(productId) === 0
  }

  return (
    <InventoryContext.Provider value={{
      inventory,
      updateStock,
      getStock,
      isLowStock,
      isOutOfStock
    }}>
      {children}
    </InventoryContext.Provider>
  )
}