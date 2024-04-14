// Router.tsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import HomePage from '../HomePage';
import Travel from '../Travel';
import WhatToKnow from '../WhatToKnow';
import WeddingInformation from '../WeddingInformation';
import OurLoveStory from '../OurLoveStory';
import Contact from '../Contact';
import FAQ from '../FAQ';
import NotFoundComponent from '../NotFoundComponent';

/**
 * React router component switching to the currently displayed page
 */
export const Router: React.FC = () => (
	<Routes>
		<Route path="/" element={<HomePage />} />
		<Route path="/travel/*" element={<Travel />} />
		<Route path="what-to-know" element={<WhatToKnow />} />
		<Route path="wedding-info/*" element={<WeddingInformation />} />
		<Route path="our-love-story" element={<OurLoveStory />} />
		<Route path="contact" element={<Contact />} />
		<Route path="faq" element={<FAQ />} />
		<Route path="*" element={<NotFoundComponent />} />
	</Routes>
);

