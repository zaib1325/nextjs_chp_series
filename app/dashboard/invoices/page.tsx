import { PrismaClient } from '@/lib/generated/prisma'
import React from 'react'

async function page() {
  const prisma = new PrismaClient()
  const invoices = await prisma.invoice.findMany()
  
  return (
    <main className="p-6">
      <h1 className="text-xl font-bold mb-4">Invoices</h1>
      <ul className="space-y-4">
        {invoices.map((inv) => (
          <li key={inv.id} className="bg-white p-4 my-4 rounded shadow">
            <p><strong>ID:</strong> {inv.id}</p>
            <p><strong>Status:</strong> {inv.status}</p>
            <p><strong>Amount:</strong> ${inv.amount}</p>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default page
