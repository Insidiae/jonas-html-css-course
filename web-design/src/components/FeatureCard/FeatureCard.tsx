import * as React from "react";
import styled from "styled-components/macro";

import Icon from "../Icon";

import type { Feature } from "../../data/features";
import { COLORS } from "../../constants";

export default function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <div>
      <FeatureIcon
        id={feature.icon}
        color={COLORS.primary[1000]}
        size={32}
        strokeWidth={2}
      />
      <FeatureTitleWrapper>
        <strong>{feature.title}</strong>
      </FeatureTitleWrapper>
      <FeatureText>{feature.text}</FeatureText>
    </div>
  );
}

const FeatureTitleWrapper = styled.p`
  margin-bottom: 16px;
  font-size: ${20 / 16}rem;
`;

const FeatureIcon = styled(Icon)`
  margin-bottom: 24px;
`;

const FeatureText = styled.p`
  font-size: ${18 / 16}rem;
  line-height: 1.7;
`;
