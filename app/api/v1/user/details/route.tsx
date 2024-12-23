import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    name: "Tanzeem",
    email: "dev.tanzeem@gmail.com",
    address: { city: "Dhanbad", state: "Jharkhand", houseNumber: "401" },
  });
}

export function PUT() {
  return NextResponse.json({
    name: "Tanzeem",
    email: "dev.tanzeem@gmail.com",
    address: { city: "Dhanbad", state: "Jharkhand", houseNumber: "401" },
  });
}

export function POST() {
  return NextResponse.json({
    name: "Tanzeem",
    email: "dev.tanzeem@gmail.com",
    address: { city: "Dhanbad", state: "Jharkhand", houseNumber: "401" },
  });
}

export function DELETE() {
  return NextResponse.json({
    name: "Tanzeem IS DELETED",
    email: "dev.tanzeem@gmail.com",
    address: { city: "Dhanbad", state: "Jharkhand", houseNumber: "401" },
  });
}
