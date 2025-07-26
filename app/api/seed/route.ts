import { PrismaClient } from '@/lib/generated/prisma'
import { NextResponse } from "next/server";

const prisma = new PrismaClient()

export async function GET() {


    try {
        await prisma.user.deleteMany();
        await prisma.invoice.deleteMany();
        await prisma.customer.deleteMany();

        //Seeded user's dummy data
        const users = await prisma.user.createMany({
            data: [
                { name: "Salman", email: "salman@example.com" },
                { name: "Ayesha", email: "ayesha@example.com" },
                { name: "Bilal", email: "bilal@example.com" },
            ]
        })

        // Create customers individually to get their IDs
        const customerData = [
            { name: 'Zain Tech', email: 'zain@tech.com', image_url: 'https://i.pravatar.cc/100?u=zain' },
            { name: 'CodeCraft', email: 'hello@codecraft.com', image_url: 'https://i.pravatar.cc/100?u=craft' },
            { name: 'ByteHub', email: 'support@bytehub.io', image_url: 'https://i.pravatar.cc/100?u=bytehub' },
        ];

        const createdCustomers = [];
        for (const data of customerData) {
            const customer = await prisma.customer.create({ data });
            createdCustomers.push(customer);
        }

        //generated the invoices with the id of customers
        const invoices = await prisma.invoice.createMany({
            data: [
                {
                    customerId: createdCustomers[0].id,
                    amount: 120000,
                    status: 'paid',
                    date: new Date('2025-07-01'),
                },
                {
                    customerId: createdCustomers[1].id,
                    amount: 90000,
                    status: 'pending',
                    date: new Date('2025-07-10'),
                },
                {
                    customerId: createdCustomers[2].id,
                    amount: 60000,
                    status: 'paid',
                    date: new Date('2025-06-25'),
                },
                {
                    customerId: createdCustomers[0].id,
                    amount: 30000,
                    status: 'pending',
                    date: new Date('2025-07-17'),
                },
                {
                    customerId: createdCustomers[1].id,
                    amount: 45000,
                    status: 'paid',
                    date: new Date('2025-07-15'),
                },
            ],
        })

        if (process.env.NODE_ENV === 'production') {
            return NextResponse.json(
                { error: 'Seeding not allowed in production' },
                { status: 403 }
            );
        }

        return NextResponse.json({
            message: "DB seeded successfully with user, invoice, customers",
            user: users.count,
            invoice: invoices.count,
            customer: createdCustomers.length
        })
    } catch (error: any) {
        console.error('❌ Seeding Error:', error); // Log full error
        return NextResponse.json(
            { error: 'Failed to seed users', detail: error?.message || String(error) },
            { status: 500 }
        );
    } finally {
        await prisma.$disconnect()
    }
}