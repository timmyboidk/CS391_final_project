/*
 * Page: Home Page (Dashboard)
 * ----------------------------------------------------------------------------
 * Description:
 * This is the main entry point for the application. It serves as a dashboard
 * that aggregates all lottery data. It orchestrates the layout by assembling
 * the Header, Legend, Data Table, and Analytics components.
 *
 * Logic & Reasoning:
 * We chose a clean, component-based architecture here. The page itself is a
 * Server Component, but it imports Client Components (Table, InstantAnalytics)
 * to handle interactivity. This separation ensures SEO optimization while
 * maintaining a reactive user experience.
 * ----------------------------------------------------------------------------
 */

import Header from "./components/Header";
import Footer from "./components/Footer";
import Legend from "./components/Legend";
import Table from "./components/Table";
import InstantAnalytics from './components/InstantAnalytics';

export default function HomePage() {
    return (
        <div className="min-h-screen flex flex-col bg-green-100">
            <Header />

            <main className="flex-1 p-4">
                
                <Table />
                <InstantAnalytics/>
                <Legend />
            </main>

            <Footer />
        </div>
    );
}
