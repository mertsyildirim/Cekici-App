import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const talepler = await prisma.talep.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
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
    const talep = await prisma.talep.create({
      data: {
        musteriAdi: body.musteriAdi,
        telefon: body.telefon,
        adres: body.adres,
        aciklama: body.aciklama,
      },
    });
    return NextResponse.json(talep);
  } catch (error) {
    console.error('Talep oluşturulamadı:', error);
    return NextResponse.json(
      { error: 'Talep oluşturulamadı' },
      { status: 500 }
    );
  }
} 