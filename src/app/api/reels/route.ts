import { NextResponse } from "next/server";
import instagramDl from "@sasmeee/igdl";

export const POST = async (req: Request) => {
    try {
        const { url } = await req.json();

        if (!url) {
            return NextResponse.json(
                { message: "URL is required" },
                { status: 400 }
            );
        }

        const dataList = await instagramDl(url);
        return NextResponse.json({ message: "OK", data: dataList }, { status: 200 });
    } catch (err) {
        return NextResponse.json(
            { message: "error", err },
            { status: 500 }
        );
    }
};

// Function to handle GET requests if needed
export const GET = async (req: Request) => {
    return NextResponse.json({ message: "This API only supports POST requests" }, { status: 405 });
};
