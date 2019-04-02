import React from 'react';
import renderer from 'react-test-renderer';
import { Section } from '../src';

test('component should match snapshot', () => {
  const { SectionCell } = Section;

  const component = renderer.create(
    <Section>
      <SectionCell xs={12} sm={12} md={6} lg={6} xl={4}>
        Some super text
      </SectionCell>
      <SectionCell xs={12} sm={12} md={6} lg={6} xl={4}>
        Some other text
      </SectionCell>
      <SectionCell xs={12} sm={12} md={12} lg={12} xl={4}>
        Some long long long (no) text
      </SectionCell>
    </Section>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('component should match snapshot', () => {
  const { SectionCell } = Section;

  const component = renderer.create(
    <Section className="center">
      <SectionCell xs={12} sm={12} md={6} lg={6} xl={4}>
        Some super text
      </SectionCell>
      <SectionCell xs={12} sm={12} md={6} lg={6} xl={4}>
        Some other text
      </SectionCell>
      <SectionCell xs={12} sm={12} md={12} lg={12} xl={4}>
        Some long long long (no) text
      </SectionCell>
    </Section>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});