import React from 'react';

const ReviewsPage: React.FC = () => {
    const dummyReviews = [
        { id: 1, author: 'JAMILA LABIADH', content: 'Great product!', rating: 5 },
        { id: 2, author: 'Jane Smith', content: 'Not bad, could be better.', rating: 3 },
        { id: 3, author: 'Alice Johnson', content: 'Terrible experience.', rating: 1 },
    ];

    return (
        <div>
            <h1>Reviews</h1>
            <ul>
                {dummyReviews.map(review => (
                    <li key={review.id}>
                        <h2>{review.author}</h2>
                        <p>{review.content}</p>
                        <p>Rating: {review.rating}/5</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ReviewsPage;