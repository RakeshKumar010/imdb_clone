import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2"; // Import sweetalert2
import { ratingFun } from "../redux/ratingSlice";
function Star({
  selected = false,
  onMouseEnter = (f) => f,
  onMouseLeave = (f) => f,
  onClick = (f) => f,
}) {
  return (
    <FaStar
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      color={selected ? "yellow" : "grey"}
      className="cursor-pointer"
    />
  );
}

function StarRating({ totalStars = 5, value }) {
  const dispatch = useDispatch();
  const ratingData = useSelector((state) => state.rating.value);
  const { _id, userRating, comment } = value;
  const [starsSelected, setStarsSelected] = useState(0);
  const [starsHovered, setStarsHovered] = useState(0);
  // const [comment, setComment] = useState("");

  async function handleStarClick(index) {
    setStarsSelected(index + 1);
    const { value: userComment } = await Swal.fire({
      input: "textarea",
      inputLabel: "Comment",
      inputPlaceholder: "Type your comment here...",
      inputAttributes: {
        "aria-label": "Type your comment here",
      },
      showCancelButton: true,
      confirmButtonColor: "green",
    });

    if (userComment) {
      console.log(starsSelected);
      let result = await fetch("http://localhost:8000/favmovie", {
        method: "put",
        body: JSON.stringify({
          _id: _id,
          comment: userComment,
          userRating: index + 1,
        }),
        headers: {
          "content-type": "application/json",
        },
      });
      result = await result.json();
      dispatch(ratingFun(!ratingData));
    }
  }

  let stars = [];
  for (let i = 0; i < totalStars; i++) {
    stars.push(
      <Star
        key={i}
        selected={i < starsHovered}
        onMouseEnter={() => setStarsHovered(i + 1)}
        onMouseLeave={() => setStarsHovered(userRating)}
        onClick={() => handleStarClick(i)}
      />
    );
  }

  return (
    <div className="text-2xl">
      <div className="flex gap-2">{stars}</div>
      <p className="mt-2 text-lg">
        {userRating} of {totalStars} stars
      </p>
      {comment && <p className="mt-2 text-sm text-gray-500">{comment}</p>}
    </div>
  );
}

export default StarRating;
