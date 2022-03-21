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
`;

const FeatureText = styled.p``;
