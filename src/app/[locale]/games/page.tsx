import Link from "next/link";
import React from "react";

interface GamesPageProps {
  params: Promise<{ locale: string }>;
}

export default async function GamesPage({params}: GamesPageProps) {
  const {locale} = await params;

  return (
    <div className="min-h-screen bg-neutral-900 p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-8 text-neutral-100">Games</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link
          className="block p-6 bg-neutral-800 rounded-2xl shadow-lg hover:ring-2 hover:ring-orange-500 hover:scale-105 transition-all duration-300"
          href={`/${locale}/games/connect4`}
        >
          <h2 className="text-2xl font-bold mb-2 text-orange-500">Connect 4</h2>
          <p className="text-neutral-300">
            Play the classic Connect 4 game against a friend.
          </p>
        </Link>
      </div>
    </div>
  );
}
