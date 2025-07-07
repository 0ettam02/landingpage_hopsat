import React from "react";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 py-12">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center justify-center">
        <h1 className="text-6xl font-extrabold tracking-tight leading-tight mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          HOPSAT
        </h1>
        <p className="text-2xl text-gray-300 mb-6">
          Reinventing connectivity through intelligent satellite routing.
        </p>
        <p className="text-md text-gray-400 mb-10 max-w-2xl">
          Inspired by classic network routing algorithms like Dijkstra and A*, HOPSAT applies those same intelligent pathfinding principles to wireless and satellite-based systems — creating a network of interconnected micro-satellites that deliver signals in the most optimal way possible.
        </p>
        <a href="#mosaic" className="bg-white text-black text-lg px-6 py-3 rounded-full hover:bg-gray-200 transition flex items-center gap-2 shadow-md">
          Learn More <ArrowRight size={20} />
        </a>
      </div>

      {/* Mosaic Section */}
      <section id="mosaic" className="mt-28 w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-2 md:px-4">
        <div className="bg-gray-800 p-6 rounded-3xl shadow-lg hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold mb-3 text-cyan-400">What We&apos;ll Do</h2>
          <p className="text-gray-300 text-sm">
            We will build a distributed network of intelligent micro-satellites in low Earth orbit to enhance global wireless communications by leveraging dynamic routing and space-grade technologies.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-3xl shadow-lg hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold mb-3 text-cyan-400">Technologies</h2>
          <p className="text-gray-300 text-sm">
            Mesh networks, beamforming, phased-array antennas, RF and optical communication, reinforcement learning, predictive AI, and CubeSat platforms.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-3xl shadow-lg hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold mb-3 text-cyan-400">Future Vision</h2>
          <p className="text-gray-300 text-sm">
            A global, AI-powered autonomous communication network that delivers real-time connectivity, even in the most remote locations on Earth.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-3xl shadow-lg hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold mb-3 text-cyan-400">Goals</h2>
          <p className="text-gray-300 text-sm">
            Validate the network on the ground, test communication via drones and balloons, and launch the first experimental CubeSats within 3 years.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-3xl shadow-lg hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold mb-3 text-cyan-400">Challenges to Overcome</h2>
          <p className="text-gray-300 text-sm">
            Latency in current systems, coverage blackouts, inefficient traditional routing, and the limited scalability of terrestrial infrastructures.
          </p>
        </div>
      </section>

      <footer className="mt-28 w-full max-w-4xl mx-auto border-t border-gray-800 pt-8 text-center">
        <p className="text-gray-500 text-sm">
          A future-space tech startup project by dreamers, engineers, and believers.
        </p>
      </footer>
    </main>
  );
}
