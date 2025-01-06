import { NextRequest, NextResponse } from 'next/server';
import { getStorage, ref, uploadBytes } from 'firebase/storage';
import { app } from '@/app/firebase';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('cv') as File;
    const jobId = formData.get('jobId') as string;

    if (!file || !jobId) {
      return NextResponse.json(
        { error: 'File and job ID are required' },
        { status: 400 }
      );
    }

    // Upload to Firebase Storage
    const storage = getStorage(app);
    const fileBuffer = await file.arrayBuffer();
    const storageRef = ref(storage, `cvs/${jobId}/${file.name}`);
    
    await uploadBytes(storageRef, fileBuffer, {
      contentType: file.type,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error handling CV upload:', error);
    return NextResponse.json(
      { error: 'Failed to upload CV' },
      { status: 500 }
    );
  }
} 