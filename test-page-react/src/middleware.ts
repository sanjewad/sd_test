import { NextRequest, NextResponse } from 'next/server'

export const middleware = async (req: NextRequest) => {

   return NextResponse.next();
   
}

export const config = {
    matcher: ['/api/:path*'],
}