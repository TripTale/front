import { BACK_HOST } from "@/app/components/modal/Login";
import axios from "axios";
import { NextResponse } from "next/server";
/* eslint-disable */

export const GET = async () => {

    await( axios.get(`${BACK_HOST}/login`));

    
    return NextResponse.json(
    { status: 200 });
}

export const runtime = 'edge';