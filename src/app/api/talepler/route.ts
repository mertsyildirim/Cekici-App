import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('cekiciapp');
    const collection = db.collection('talepler');

    const talepler = await collection.find({}).toArray();
    return NextResponse.json(talepler);
  } catch (error) {
    console.error('Talepler getirilirken hata oluştu:', error);
    return NextResponse.json(
      { error: 'Talepler getirilirken bir hata oluştu' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const client = await clientPromise;
    const db = client.db('cekiciapp');
    const collection = db.collection('talepler');

    const result = await collection.insertOne({
      ...body,
      createdAt: new Date(),
      status: 'beklemede'
    });

    return NextResponse.json(result);
  } catch (error) {
    console.error('Talep oluşturulurken hata oluştu:', error);
    return NextResponse.json(
      { error: 'Talep oluşturulurken bir hata oluştu' },
      { status: 500 }
    );
  }
} 