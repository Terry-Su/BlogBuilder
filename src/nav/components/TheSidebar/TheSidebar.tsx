import React, { Component } from 'react'
import TheCategorySection from './TheCategorySection/TheCategorySection';
import TheTagSection from './TheTagSection/TheTagSection';

export default class TheSidebar extends Component {
  render() {
    return <div>
      <TheCategorySection />
      <TheTagSection />
    </div>
  }
}