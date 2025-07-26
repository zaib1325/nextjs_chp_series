import { PrismaClient } from "./generated/prisma";

const prisma = new PrismaClient()

function frmtDate(date: Date) : string {
    return new Intl.DateTimeFormat('en-us', { month : 'short' }).format(date);
}

export async function fetchRevenue(){
    const now = new Date();

    const startDate = new Date(now)

    
}