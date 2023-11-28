import emailEvent from "@/lib/email.config";
import { NextResponse } from "next/server"

export const POST = async (req,res) => {
    const {message} = await req.json();
    await emailEvent("Rami@midklick.com, ramishaqsi@gmail.com","test", message);
    return NextResponse.json({message:"email send successfully"},{status:200});
}