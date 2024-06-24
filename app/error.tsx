"use client"

import { useEffect } from "react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
  
  return (
    <main className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center space-y-5">
        <i className="fa-solid fa-cog fa-spin text-6xl"/>
        <h1 className="text-4xl font-bold text-cyan-400">Lynx Network Deployment In Progress</h1>
        <p className="text-xl text-center">The Lynx Network is currently being set up.<br/> This means we are installing the necessary equipment and configuring the system to be operational.</p>
      </div>
    </main>
  );
}
