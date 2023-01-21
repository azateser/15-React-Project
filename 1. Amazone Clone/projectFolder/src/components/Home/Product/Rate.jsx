import React from "react";
import {  MdOutlineStar, MdOutlineStarBorder } from "react-icons/md";


const Rate = ({rating}) => {
  return (
    <React.Fragment>
      {rating === 0 && (
        <React.Fragment>
          <MdOutlineStarBorder size={20} />
          <MdOutlineStarBorder size={20} />
          <MdOutlineStarBorder size={20} />
          <MdOutlineStarBorder size={20} />
          <MdOutlineStarBorder size={20} />
        </React.Fragment>
      )}
      {rating === 1 && (
        <React.Fragment>
          <MdOutlineStar size={20} />
          <MdOutlineStarBorder size={20} />
          <MdOutlineStarBorder size={20} />
          <MdOutlineStarBorder size={20} />
          <MdOutlineStarBorder size={20} />
        </React.Fragment>
      )}
      {rating === 2 && (
        <React.Fragment>
          <MdOutlineStar size={20} />
          <MdOutlineStar size={20} />
          <MdOutlineStarBorder size={20} />
          <MdOutlineStarBorder size={20} />
          <MdOutlineStarBorder size={20} />
        </React.Fragment>
      )}
      {rating === 3 && (
        <React.Fragment>
          <MdOutlineStar size={20} />
          <MdOutlineStar size={20} />
          <MdOutlineStar size={20} />
          <MdOutlineStarBorder size={20} />
          <MdOutlineStarBorder size={20} />
        </React.Fragment>
      )}
      {rating === 4 && (
        <React.Fragment>
          <MdOutlineStar size={20} />
          <MdOutlineStar size={20} />
          <MdOutlineStar size={20} />
          <MdOutlineStar size={20} />
          <MdOutlineStarBorder size={20} />
        </React.Fragment>
      )}
      {rating === 5 && (
        <React.Fragment>
          <MdOutlineStar size={20} />
          <MdOutlineStar size={20} />
          <MdOutlineStar size={20} />
          <MdOutlineStar size={20} />
          <MdOutlineStar size={20} />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Rate;
