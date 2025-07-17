import { PrismaClient } from "@prisma/client/extension";
import { NextResponse } from "next/server";

const prisma = new PrismaClient()

export async function GET() {
    try {
        await prisma.user.deleteMany();

        const users = await prisma.createMany({
            data: [
                { name: "Salman", email: "salman@example.com" },
                { name: "Ayesha", email: "ayesha@example.com" },
                { name: "Bilal", email: "bilal@example.com" },
            ]
        })

        return NextResponse.json({
            message: "Users seeded successfully",
            insertedCount: users.count
        })
    } catch (error) {
        console.log('Seeding Error', error)
        return NextResponse.json({error: 'Failed to seed users'}, {status: 500})
    } finally {
        await prisma.$disconnect()
    }
}