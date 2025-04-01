import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const talep = await prisma.talep.findUnique({
      where: {
        id: params.id,
      },
    });
    if (!talep) {
      return NextResponse.json({ error: 'Talep bulunamadı' }, { status: 404 });
    }
    return NextResponse.json(talep);
  } catch (error) {
    return NextResponse.json({ error: 'Talep alınamadı' }, { status: 500 });
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const talep = await prisma.talep.update({
      where: {
        id: params.id,
      },
      data: {
        durum: body.durum,
      },
    });
    return NextResponse.json(talep);
  } catch (error) {
    return NextResponse.json({ error: 'Talep güncellenemedi' }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.talep.delete({
      where: {
        id: params.id,
      },
    });
    return NextResponse.json({ message: 'Talep silindi' });
  } catch (error) {
    return NextResponse.json({ error: 'Talep silinemedi' }, { status: 500 });
  }
} 