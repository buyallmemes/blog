import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string; path: string[] }> }
) {
  try {
    const { slug, path: imagePath } = await params;

    // Construct the file path
    const contentDir = path.join(process.cwd(), 'content');
    const filePath = path.join(contentDir, slug, 'images', ...imagePath);

    // Security check: ensure the path is within the content directory
    const resolvedPath = path.resolve(filePath);
    const resolvedContentDir = path.resolve(contentDir);

    if (!resolvedPath.startsWith(resolvedContentDir)) {
      return new NextResponse('Forbidden', { status: 403 });
    }

    // Check if file exists
    if (!fs.existsSync(filePath)) {
      return new NextResponse('Not Found', { status: 404 });
    }

    // Read the file
    const fileBuffer = fs.readFileSync(filePath);

    // Determine content type based on file extension
    const ext = path.extname(filePath).toLowerCase();
    const contentType = getContentType(ext);

    // Return the file with appropriate headers
    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch (error) {
    console.error('Error serving content image:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

function getContentType(extension: string): string {
  const types: Record<string, string> = {
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.webp': 'image/webp',
  };

  return types[extension] || 'application/octet-stream';
}
