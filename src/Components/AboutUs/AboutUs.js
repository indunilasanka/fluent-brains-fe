import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { BsArrowLeftShort } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const Wrapper = styled.div``;

const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Container>
        <div className="back-to-browse">
          <BsArrowLeftShort size="25" className="m-0" />
          <Link to="/">
            <span className="m-0  back_to_browse  px-2">
              {t("back_to_browse")}
            </span>
          </Link>
        </div>
        <h2 className="py-3 start">{t("aboutus")}</h2>
      </Container>
    </Wrapper>
  );
};
export default AboutUs;
