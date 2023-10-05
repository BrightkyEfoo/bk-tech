import React, { useEffect } from "react";
import "./style.scss";
import styled from "styled-components";
import useGoHome from "../../hooks/useGoHome";

const Container = styled.div<{ image: string }>`
  background-image: url("${(props) => props.image}");
`;
type Props = {
  pageTitle: string;
  title: string;
  image: string;
};

const CommonHeroSection = ({ pageTitle, title, image }: Props) => {
  useEffect(() => {
    document.title = "BK-TECH : " + pageTitle;
  }, [pageTitle]);

  const goHome = useGoHome();

  return (
    <Container className="common-hero-section-container" image={image}>
      <div>
        <ul>
          <span onClick={goHome}>Home</span>
          <li>{pageTitle}</li>
        </ul>
        <h1>{title}</h1>
      </div>
    </Container>
  );
};

export default CommonHeroSection;
