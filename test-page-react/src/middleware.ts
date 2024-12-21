import { NextRequest, NextResponse } from 'next/server'

export const middleware = async (req: NextRequest) => {
    console.log("request"+ req);
   return NextResponse.next();

}

export const config = {
    matcher: ['/api/:path*'],
}
