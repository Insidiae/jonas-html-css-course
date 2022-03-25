import * as React from "react";
import styled from "styled-components/macro";

import type { Feature } from "../../data/features";

export default function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <div>
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

const FeatureText = styled.p`
  font-size: ${18 / 16}rem;
  line-height: 1.7;
`;
