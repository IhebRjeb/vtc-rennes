"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

interface Booking {
  _id: string
  // Add other booking properties here
}

interface Review {
  _id: string
  content: string
  approved: boolean
  // Add other review properties here
}

export default function AdminDashboard() {
  const [bookings, setBookings] = useState<Booking[]>([])
  const [reviews, setReviews] = useState<Review[]>([])
  const router = useRouter()

  useEffect(() => {
    const fetchData = async () => {
      // Check if user is authenticated and has admin role
      const isAdmin = await checkAdminStatus()
      if (!isAdmin) {
        router.push("/login") // Redirect to login page if not admin
        return
      }

      // Fetch bookings and reviews from API
      const bookingsData = await fetchBookings()
      const reviewsData = await fetchReviews()

      setBookings(bookingsData)
      setReviews(reviewsData)
    }

    fetchData()
  }, [router])

  const handleReviewApproval = async (reviewId: string, approved: boolean) => {
    try {
      // Update review approval status
      const response = await fetch(`/api/reviews/${reviewId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ approved }),
      })

      if (response.ok) {
        // Update local state
        setReviews(reviews.map((review) => (review._id === reviewId ? { ...review, approved } : review)))
      } else {
        console.error("Failed to update review status")
      }
    } catch (error) {
      console.error("Error updating review status:", error)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Admin Dashboard</h1>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Réservations</h2>
        <ul className="space-y-4">
          {bookings.map((booking) => (
            <li key={booking._id} className="bg-white shadow rounded-lg p-4">
              {/* Display booking details */}
              <p>Booking ID: {booking._id}</p>
              {/* Add more booking details here */}
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-4">Avis en attente</h2>
        <ul className="space-y-4">
          {reviews
            .filter((review) => !review.approved)
            .map((review) => (
              <li key={review._id} className="bg-white shadow rounded-lg p-4">
                <p className="mb-2">{review.content}</p>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleReviewApproval(review._id, true)}
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition-colors"
                  >
                    Approuver
                  </button>
                  <button
                    onClick={() => handleReviewApproval(review._id, false)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition-colors"
                  >
                    Rejeter
                  </button>
                </div>
              </li>
            ))}
        </ul>
      </section>
    </div>
  )
}

// Placeholder functions for API calls
async function checkAdminStatus() {
  // Implement your admin check logic here
  return true
}

async function fetchBookings(): Promise<Booking[]> {
  // Implement your bookings fetch logic here
  return []
}

async function fetchReviews(): Promise<Review[]> {
  // Implement your reviews fetch logic here
  return []
}

