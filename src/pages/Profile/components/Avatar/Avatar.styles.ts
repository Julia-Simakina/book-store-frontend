import styled from "styled-components";

const PhotoContainer = styled.div`
  width: 305px;
  position: relative;
  cursor: pointer;

  &:hover .channge-photo-icon {
    opacity: 1;
    cursor: pointer;
  }
  .channge-photo-icon {
    transition: all 0.2s ease;
    position: absolute;
    bottom: 20px;
    right: 20px;
    width: 48px;
    height: 48px;
    opacity: 0.5;
  }

  .channge-photo-button {
    display: none;
  }

  .profile-photo {
    width: 305px;
    height: 305px;
    object-fit: cover;
    overflow: hidden;
    border-radius: 16px;
    cursor: pointer;
  }
`;

export default PhotoContainer;
