// Order notification service (console logging for now)
export const sendOrderConfirmation = async (orderDetails) => {
  try {
    const emailData = {
      to_email: orderDetails.customerEmail,
      customer_name: orderDetails.customerName,
      order_items: orderDetails.items.map(item => 
        `${item.name} x${item.quantity} - ${item.price}`
      ).join('\n'),
      total_amount: orderDetails.total,
      order_date: new Date().toLocaleDateString(),
      store_phone: '+919790561323'
    }
    
    console.log('Order confirmation:', emailData)
    return { success: true }
  } catch (error) {
    console.error('Order confirmation failed:', error)
    return { success: false, error }
  }
}

export const sendLowStockAlert = async (product) => {
  try {
    const emailData = {
      to_email: 'admin@madeenafancystore.com',
      product_name: product.title,
      current_stock: product.stock,
      product_id: product.id
    }
    
    console.log('Low stock alert:', emailData)
    return { success: true }
  } catch (error) {
    console.error('Low stock alert failed:', error)
    return { success: false, error }
  }
}